while (true) {
    if (input.soundLevel() < 20) {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
        basic.pause(100)
    } else {
        basic.showLeds(`
         . . . . .
         . . . . .
         . . . . .
         . . . . .
         . . . . .
         `)
        if (input.soundLevel() < 40) {
            basic.showLeds(`
             . . . . .
             . . . . .
             . . . . .
             . . . . #
             . . . . #
             `)
            basic.pause(100)
        } else {
            basic.showLeds(`
             . . . . .
             . . . . .
             . . . . .
             . . . . .
             . . . . .
             `)
            if (input.soundLevel() < 60) {
                basic.showLeds(`
                 . . . . .
                 . . . . .
                 . . . . #
                 . . . . .
                 . . . . .
                 `)
                basic.pause(100)
            } else {
                basic.showLeds(`
                 . . . . .
                 . . . . .
                 . . . . .
                 . . . . .
                 . . . . .
                 `)
                if (input.soundLevel() < 80) {
                    basic.showLeds(`
                     . . . . .
                     . . . . #
                     . . . . .
                     . . . . .
                     . . . . .
                     `)
                    basic.pause(100)
                } else {
                    basic.showLeds(`
                     . . . . .
                     . . . . .
                     . . . . .
                     . . . . .
                     . . . . .
                     `)
                    if (input.soundLevel() < 100) {
                        basic.showLeds(`
                         . . . . #
                         . . . . .
                         . . . . .
                         . . . . .
                         . . . . .
                         `)
                        basic.pause(100)
                    } else {
                        basic.showLeds(`
                         . . . . .
                         . . . . .
                         . . . . .
                         . . . . .
                         . . . . .
                         `)
                    }
                    
                }
                
            }
            
        }
        
    }
    
}
