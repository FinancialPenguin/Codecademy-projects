def print_message():
  print('I\'m sorry, I did not understand your selection. Please enter the corresponding letter for your response.')

def order_latte():
    res = input('And what kind of milk for your latte? \n[a] 2% milk \n[b] Non-fat milk \n[c] Soy milk \n> ')
    if res == 'a':
      return '2% milk latte'
    elif res == 'b':
      return 'non-fat milk latte'
    elif res == 'c':
      return 'soy milk latte'
    else:
      print_message()
      return order_latte()

def get_size():
  res = input('What size drink can I get for you? \n[a] Small \n[b] Medium \n[c] Large \n> ')

  if res == 'a':
    return 'small'
  elif res == 'b':
    return 'medium'
  elif res == 'c':
    return 'large'
  else:
    print_message()
    return get_size()

    
def get_drink_type():
  res = input('What type of drink would you like? \n[a] Brewed Coffee \n[b] Mocha \n[c] Latte \n> ')

  if res == 'a':
    return 'brewed coffee'
  elif res == 'b':
    return order_mocha()
  elif res == 'c':
    return order_latte()
  else:
    print_message()
    return get_drink_type()

def coffee_bot():
  print('Welcome to the cafe!')

  order_drink = 'y'
  drinks = []
 
  while order_drink == 'y':
    size = get_size()  
    drink_type = get_drink_type()
 
    drink = '{} {}'.format(size, drink_type)
    print('Alright, that\'s a {}!'.format(drink))
    drinks.append(drink)
 
    while True:
      order_drink = input('Would you like to order another drink? (y/n) \n> ')
      if order_drink in ['y', 'n']:
        break
  
  print('Okay, so I have:')
 
  for drink in drinks:
    print('-', drink.capitalize())
    
  name = input('Can I get your name please? \n> ')
  print('Thanks, {}! Your order will be ready shortly.'.format(name))
    

def order_mocha():
  while True:
    res = input('Would you like to try our limited-edition peppermint mocha? \n[a] Sure! \n[b] Maybe next time! \n> ')
    
    if res == 'a':
      return 'peppermint mocha'
    elif res == 'b':
      return 'mocha'

    print_message()

coffee_bot()
