$baseUrl = "http://localhost:8080/api"

# 1. Register
$regBody = @{
    name = "Test User"
    email = "test@example.com"
    password = "password"
    role = "CUSTOMER"
} | ConvertTo-Json
Write-Host "1. Registering..." -ForegroundColor Cyan
try {
    $reg = Invoke-RestMethod -Uri "$baseUrl/auth/register" -Method Post -Body $regBody -ContentType "application/json" -ErrorAction Stop
    Write-Host "   Success: $reg" -ForegroundColor Green
} catch {
    $err = $_.Exception.Response.GetResponseStream()
    $reader = New-Object System.IO.StreamReader($err)
    $resp = $reader.ReadToEnd()
    if ($resp -match "Email already in use") {
         Write-Host "   User already exists (Expected if re-running)" -ForegroundColor Yellow
    } else {
         Write-Host "   Failed: $resp" -ForegroundColor Red
    }
}

# 2. Login
$loginBody = @{
    email = "test@example.com"
    password = "password"
} | ConvertTo-Json
Write-Host "`n2. Logging in..." -ForegroundColor Cyan
try {
    $login = Invoke-RestMethod -Uri "$baseUrl/auth/login" -Method Post -Body $loginBody -ContentType "application/json" -ErrorAction Stop
    $token = $login.token
    Write-Host "   Success! Token received." -ForegroundColor Green
} catch {
    Write-Host "   Login Failed: $_" -ForegroundColor Red
    exit 1
}

# 3. Get Profile
Write-Host "`n3. Fetching Profile (Protected Endpoint)..." -ForegroundColor Cyan
try {
    $profile = Invoke-RestMethod -Uri "$baseUrl/user/me" -Method Get -Headers @{ Authorization = "Bearer $token" } -ErrorAction Stop
    Write-Host "   Success! Profile Data:" -ForegroundColor Green
    Write-Host ($profile | ConvertTo-Json -Depth 2)
} catch {
     Write-Host "   Get Profile Failed: $_" -ForegroundColor Red
}
