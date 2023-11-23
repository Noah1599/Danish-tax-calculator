# Salary
hourly_wage = 131.4
hours_worked_per_day = 3
days_work_per_week = 2
weeks_per_year = 52

# Tax Rates
su = 0
basic_tax_rate = 0.1206
municipal_tax_rate = 0.2552
church_tax_rate = 0.0089
personal_deduction = 49700
employment_contribution_rate = 0.08
tax_ceiling = 0.5207
top_tax_threshold = 588900
top_tax_rate = 0.15

# The program starts here
paid_tax = basic_tax_rate + municipal_tax_rate + church_tax_rate
maximum_tax_rate = paid_tax + top_tax_rate
total_hours = hours_worked_per_day * days_work_per_week * weeks_per_year
gross_salary = total_hours * hourly_wage + su * 12
print("Tax before top tax: ", paid_tax * 100, "%")
print("Tax after top tax: ", maximum_tax_rate * 100, "%\n")
print("Total hours worked per year: ", total_hours, "and gross salary is: ", gross_salary, "kr")

without_employment_contribution = gross_salary - (gross_salary * employment_contribution_rate)
if without_employment_contribution < personal_deduction:
    without_personal_deduction = without_employment_contribution
else:
    without_personal_deduction = without_employment_contribution - personal_deduction
pays_top_tax = without_personal_deduction > top_tax_threshold

if pays_top_tax:
    top_tax_paid_on = without_personal_deduction - top_tax_threshold
    print("\n\ntop tax paid on: ", int(top_tax_paid_on), "kr")
    money_with_normal_tax = top_tax_threshold - (top_tax_threshold * paid_tax)
    print("Normal tax paid on: ", int(top_tax_threshold), "kr")
    print("\nTop tax paid: ", int(top_tax_paid_on * maximum_tax_rate), "kr")
    print("Normal tax paid: ", int(top_tax_threshold * paid_tax), "kr\n")
    top_tax_paid = top_tax_paid_on - (top_tax_paid_on * maximum_tax_rate)
    money_after_tax = money_with_normal_tax + top_tax_paid + personal_deduction
    print("Money after tax: ", int(money_after_tax), "kr")
    print("\nMoney paid in tax: ", int(gross_salary - money_after_tax), "kr")
    print("Money after tax: ", int(money_after_tax), "kr")
else:
    print("\nMoney subject to tax: ", int(without_personal_deduction), "kr")
    if without_personal_deduction < personal_deduction:
        money_after_tax = without_personal_deduction
    else:
        money_after_tax = without_personal_deduction - (without_personal_deduction * paid_tax) + personal_deduction
    print("\nMoney after tax: ", int(money_after_tax), "kr")
    print("Paid money in tax: ", int(without_personal_deduction - money_after_tax), "kr")
