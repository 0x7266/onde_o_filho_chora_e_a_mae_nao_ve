def weather_info (temp):
    c = (temp - 32) * (5/9)
    return (str(c) + " is above freezing temperature") if (c > 0) else (str(c) + " is freezing temperature")