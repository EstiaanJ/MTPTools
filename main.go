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
	router.Static("/scripts", "./scripts")
	router.Static("/images", "./images")
	router.LoadHTMLGlob("pages/*.html")

	router.GET("/", func(c *gin.Context) {
		c.HTML(http.StatusOK, "index.html", gin.H{
			"content": "Login page",
		})
	})

	/*router.GET("/account.html", func(c *gin.Context) {
		c.HTML(http.StatusOK, "account.html", gin.H{
			"content": "User account page",
		})
	})*/
}
