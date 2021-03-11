while True:

    if input.sound_level()<20:
        basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        """)
        basic.pause(100)
    else:
         basic.show_leds("""
         . . . . .
         . . . . .
         . . . . .
         . . . . .
         . . . . .
         """)
         if input.sound_level()<40:
             basic.show_leds("""
             . . . . .
             . . . . .
             . . . . .
             . . . . #
             . . . . #
             """)
             basic.pause(100)
         else:
             basic.show_leds("""
             . . . . .
             . . . . .
             . . . . .
             . . . . .
             . . . . .
             """)
             if input.sound_level()<60:
                 basic.show_leds("""
                 . . . . .
                 . . . . .
                 . . . . #
                 . . . . .
                 . . . . .
                 """)
                 basic.pause(100)
             
             else:
                 basic.show_leds("""
                 . . . . .
                 . . . . .
                 . . . . .
                 . . . . .
                 . . . . .
                 """)
                 if input.sound_level()<80:
                     basic.show_leds("""
                     . . . . .
                     . . . . #
                     . . . . .
                     . . . . .
                     . . . . .
                     """)
                     basic.pause(100)
                    
                 else:
                     basic.show_leds("""
                     . . . . .
                     . . . . .
                     . . . . .
                     . . . . .
                     . . . . .
                     """)
                     if input.sound_level()<100:
                         basic.show_leds("""
                         . . . . #
                         . . . . .
                         . . . . .
                         . . . . .
                         . . . . .
                         """)
                         basic.pause(100)
                    
                     else:
                         basic.show_leds("""
                         . . . . .
                         . . . . .
                         . . . . .
                         . . . . .
                         . . . . .
                         """)

            
            





            


