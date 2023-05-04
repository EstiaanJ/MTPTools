package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	go setup(router)
	router.Run("localhost:42156")

}

func setup(router *gin.Engine) {
	//router.Static("pages/scripts", "./scripts")
	//router.Static("pages/images", "./images")
	router.Static("pages", "./pages")
	router.LoadHTMLGlob("pages/*.html")

	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"content": "Home page",
		})
	})

	router.GET("/fastener-calculator", func(c *gin.Context) {
		c.HTML(http.StatusOK, "fasteners.html", gin.H{
			"content": "Fastener Tool",
		})
	})

	router.GET("/part-number-decoder", func(c *gin.Context) {
		c.HTML(http.StatusOK, "part-number.html", gin.H{
			"content": "Fastener Tool",
		})
	})

	router.GET("/curve-generator", func(c *gin.Context) {
		c.HTML(http.StatusOK, "curve-generator.html", gin.H{
			"content": "Curve Generator",
		})
	})

	/*router.GET("/account.html", func(c *gin.Context) {
		c.HTML(http.StatusOK, "account.html", gin.H{
			"content": "User account page",
		})
	})*/
}
