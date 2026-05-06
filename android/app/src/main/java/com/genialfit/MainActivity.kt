package com.genialfit

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

import android.view.View
import android.view.WindowManager
import android.os.Bundle

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "Genialfit"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
  
  override fun onCreate(savedInstanceState: Bundle?) {
      super.onCreate(null) // Passa null para evitar problemas de restauração de estado
      setupImmersiveMode()
  }

  private fun setupImmersiveMode() {
      // 1. Mantém a tela sempre ligada (antigo turnOff)
      window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

      val decorView = window.decorView

      // 2. Define as flags do modo imersivo
      val uiOptions = (View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
              or View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
              or View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
              or View.SYSTEM_UI_FLAG_FULLSCREEN
              or View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY)

      // 3. Aplica as flags imediatamente (antigo hideNavigationBar)
      decorView.systemUiVisibility = uiOptions

      // 4. Garante que continue oculto se a UI aparecer (antigo updateUI)
      decorView.setOnSystemUiVisibilityChangeListener { visibility ->
          if (visibility and View.SYSTEM_UI_FLAG_FULLSCREEN == 0) {
              decorView.systemUiVisibility = uiOptions
          }
      }
  }
}
