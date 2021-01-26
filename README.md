* changed gravity to 0.2

* jump sets velocity to - 23 now     
```js
    jump() {
        this.velocity = - 23;
    }
```

* check if player is above the obstacle - first if he is within the x

```js
    // condition for 'player is above the obstacle
    this.x >= trunk.x && this.x <= (trunk.x + trunk.width)
```