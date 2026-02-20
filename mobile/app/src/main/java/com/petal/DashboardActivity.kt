package com.petal

import android.content.Intent
import android.os.Bundle
import android.widget.Button
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.lifecycleScope
import com.petal.network.ApiClient
import com.petal.util.TokenManager
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

class DashboardActivity : AppCompatActivity() {

    private lateinit var tvName: TextView
    private lateinit var tvEmail: TextView
    private lateinit var tvRole: TextView
    private lateinit var tvWelcome: TextView
    private lateinit var btnLogout: Button

    private lateinit var tokenManager: TokenManager

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_dashboard)

        tokenManager = TokenManager(this)

        tvWelcome = findViewById(R.id.tvWelcome)
        tvName = findViewById(R.id.tvName)
        tvEmail = findViewById(R.id.tvEmail)
        tvRole = findViewById(R.id.tvRole)
        btnLogout = findViewById(R.id.btnLogout)

        fetchUserProfile()

        btnLogout.setOnClickListener {
            performLogout()
        }
    }

    private fun fetchUserProfile() {
        val apiService = ApiClient.getClient(tokenManager)

        lifecycleScope.launch(Dispatchers.IO) {
            try {
                val response = apiService.getCurrentUser()
                withContext(Dispatchers.Main) {
                    if (response.isSuccessful && response.body()?.success == true) {
                        val user = response.body()?.data
                        tvWelcome.text = "Welcome, ${user?.name?.split(" ")?.get(0)}!"
                        tvName.text = user?.name
                        tvEmail.text = user?.email
                        tvRole.text = user?.role
                    } else {
                        Toast.makeText(this@DashboardActivity, "Session expired.", Toast.LENGTH_SHORT).show()
                        forceLogoutLocally()
                    }
                }
            } catch (e: Exception) {
                withContext(Dispatchers.Main) {
                    Toast.makeText(this@DashboardActivity, "Error fetching profile: ${e.localizedMessage}", Toast.LENGTH_SHORT).show()
                }
            }
        }
    }

    private fun performLogout() {
        val apiService = ApiClient.getClient(tokenManager)

        lifecycleScope.launch(Dispatchers.IO) {
            try {
                // Inform backend of logout
                val response = apiService.logout()
                withContext(Dispatchers.Main) {
                    if (response.isSuccessful) {
                        Toast.makeText(this@DashboardActivity, "Logged out successfully", Toast.LENGTH_SHORT).show()
                    }
                    forceLogoutLocally()
                }
            } catch (e: Exception) {
                withContext(Dispatchers.Main) {
                    forceLogoutLocally() // Still clear local token even if network call fails
                }
            }
        }
    }

    private fun forceLogoutLocally() {
        tokenManager.clearToken()
        val intent = Intent(this, LoginActivity::class.java)
        intent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TASK
        startActivity(intent)
        finish()
    }
}
