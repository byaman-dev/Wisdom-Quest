import type { BookChapter } from "@/types";

export const babylonChapters: BookChapter[] = [
  {
    "id": "babylon-c1",
    "title": "The Man Who Desired Gold",
    "summary": "Financial abundance begins with the realization that wealth is a result of following proven laws rather than luck.",
    "sections": [
      {
        "id": "babylon-c1-s1",
        "title": "The Dissatisfaction of Bansir",
        "principle": "A strong desire for wealth is the first step toward attaining it.",
        "scenarios": [
          {
            "id": "babylon-c1-s1-sc1",
            "title": "The Hollow Paycheck",
            "setup": "The notification pings: your salary has arrived. Instead of the usual relief, you feel a sharp pang of frustration realizing that after bills, you are exactly where you were last month.",
            "choices": [
              {
                "id": "stare-at-the-balance-and",
                "label": "Stare at the balance and vow to find a path to more.",
                "mentor": "The hunger you feel is a gift; it is the seed of a gold tree that many are too lazy to plant.",
                "consequence": "You spend the evening researching assets instead of entertainment. Your focus sharpens.",
                "xp": 250,
                "impact": {
                  "mindset": 7
                },
                "trait": "+Ambition"
              },
              {
                "id": "buy-a-luxury-meal-to-soo",
                "label": "Buy a luxury meal to soothe the stress of being broke.",
                "mentor": "To fill a leaky bucket with more water does not stop the leaking. You feed the stomach but starve the future.",
                "consequence": "The temporary joy fades by morning, leaving your bank account even more depleted.",
                "xp": 50,
                "impact": {
                  "finance": -5
                },
                "trait": "-Discipline"
              },
              {
                "id": "mute-the-notification-an",
                "label": "Mute the notification and ignore the math.",
                "mentor": "To close one's eyes to a dry well does not bring the rain. Silence is the friend of poverty.",
                "consequence": "You avoid anxiety today, but the cycle of lack remains unchallenged and invisible.",
                "xp": 100,
                "impact": {
                  "emotionalControl": 2
                },
                "trait": "+Stoicism"
              }
            ]
          },
          {
            "id": "babylon-c1-s1-sc2",
            "title": "The Artisan’s Envy",
            "setup": "You watch a former colleague post pictures of their new, debt-free home. While you feel a sting of jealousy, it highlights how much you actually want a similar reality for yourself.",
            "choices": [
              {
                "id": "ask-them-for-the-specifi",
                "label": "Ask them for the specific rules they used to save.",
                "mentor": "Desire without a map is a wanderer in the desert; ask the traveler who has already found the oasis.",
                "consequence": "You gain a mentor and a concrete blueprint for your first investment plan.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Humility"
              },
              {
                "id": "log-off-and-tell-yoursel",
                "label": "Log off and tell yourself they just got lucky.",
                "mentor": "Luck is a fickle goddess who mocks those who do not prepare for her arrival. Do not call effort 'luck'.",
                "consequence": "You preserve your ego but remain stagnant while others continue to build wealth.",
                "xp": 45,
                "impact": {
                  "mindset": -6
                },
                "trait": "-Growth"
              },
              {
                "id": "calculate-exactly-how-mu",
                "label": "Calculate exactly how much you would need to match them.",
                "mentor": "It is well to count the distance to the mountain top, provided you then take the first step.",
                "consequence": "The numbers are intimidating, but the goal is now a tangible target rather than a dream.",
                "xp": 180,
                "impact": {
                  "finance": 5
                },
                "trait": "+Finance"
              }
            ]
          },
          {
            "id": "babylon-c1-s1-sc3",
            "title": "The Late Night Realization",
            "setup": "Bansir sat on his wall, idle while his chariot sat unfinished. You realize you are working hard but 'building chariots' for others while your own purse remains flat.",
            "choices": [
              {
                "id": "dedicate-one-hour-tonigh",
                "label": "Dedicate one hour tonight to your own financial plan.",
                "mentor": "The sun sets on the idle man, but it rises to illuminate the work of him who serves himself first.",
                "consequence": "A rough draft of a side-income strategy begins to take shape on your desk.",
                "xp": 290,
                "impact": {
                  "discipline": 8
                },
                "trait": "+Discipline"
              },
              {
                "id": "work-overtime-at-your-jo",
                "label": "Work overtime at your job to please the boss.",
                "mentor": "To be a faithful servant is noble, but the servant rarely owns the gold that the master counts.",
                "consequence": "You earn a small bonus, but your personal financial freedom is deferred yet again.",
                "xp": 150,
                "impact": {
                  "negotiation": 3
                },
                "trait": "+WorkEthic"
              },
              {
                "id": "complain-to-a-friend-abo",
                "label": "Complain to a friend about how unfair the system is.",
                "mentor": "Words are like the wind; they move much but build nothing. Spend your breath on plans, not laments.",
                "consequence": "You find validation in communal misery, which cements your status as a victim of circumstance.",
                "xp": 40,
                "impact": {
                  "communication": -4
                },
                "trait": "-Agency"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "babylon-c1-s1-rf1",
            "prompt": "In moments of quiet, what is the specific financial goal you desire so deeply that it makes your current situation feel intolerable?"
          },
          {
            "id": "babylon-c1-s1-rf2",
            "prompt": "Recall a time you blamed 'bad luck' for a financial setback. How might a stronger desire for wealth have changed your preparation for that moment?"
          }
        ]
      },
      {
        "id": "babylon-c1-s2",
        "title": "The Wisdom of Arkad",
        "principle": "Seek counsel from those who have successfully mastered the gold you wish to acquire.",
        "scenarios": [
          {
            "id": "babylon-c1-s2-sc1",
            "title": "The Contractor’s Promise",
            "setup": "You have saved enough to renovate your small commercial space for a new venture. A charismatic friend who has never owned property offers to manage the construction at a 'discount' price to help you out.",
            "choices": [
              {
                "id": "hire-the-friend-to-save-",
                "label": "Hire the friend to save initial gold.",
                "mentor": "Would you ask a baker for news of the stars? Nay, he knows only the yeast, and your gold will vanish like smoke in the wind.",
                "consequence": "Structural errors emerge within months, forcing you to pay twice the amount for repairs.",
                "xp": 50,
                "impact": {
                  "strategy": -4
                },
                "trait": "-Finance"
              },
              {
                "id": "seek-advice-from-a-veter",
                "label": "Seek advice from a veteran builder first.",
                "mentor": "The builder’s words are forged in the heat of many fires. His counsel is a shield that protects your purse from folly.",
                "consequence": "The veteran spots flaws in the plan, saving you from a costly legal dispute and ensuring a solid foundation.",
                "xp": 280,
                "impact": {
                  "finance": 7
                },
                "trait": "+Wisdom"
              },
              {
                "id": "interview-multiple-contr",
                "label": "Interview multiple contractors without checking their history.",
                "mentor": "You show diligence in looking, but if you do not see the fruits of their previous harvests, you are still blind to the truth.",
                "consequence": "You find a mid-range price, but the work is delayed by months due to the contractor's lack of experience.",
                "xp": 120,
                "impact": {
                  "leadership": 2
                },
                "trait": "+Persistence"
              }
            ]
          },
          {
            "id": "babylon-c1-s2-sc2",
            "title": "The Digital Mirage",
            "setup": "A social media influencer you admire is promoting a complex high-yield crypto strategy. You feel the urge to invest your life savings before the 'window' closes.",
            "choices": [
              {
                "id": "go-all-in-based-on-their",
                "label": "Go all-in based on their enthusiasm.",
                "mentor": "He who seeks wealth through the shouting of crowds finds only the echo of his own empty pockets. Gold flees the man who chases secrets it does not possess.",
                "consequence": "The market corrects sharply, leaving you with 10% of your starting capital and high stress.",
                "xp": 45,
                "impact": {
                  "emotionalControl": -5
                },
                "trait": "-Discipline"
              },
              {
                "id": "ignore-it-and-keep-gold-",
                "label": "Ignore it and keep gold in a low-interest bank account.",
                "mentor": "To fear the loss is better than to lose, yet ice that is never melted will never quench the traveler's thirst. Learn to distinguish true counsel from noise.",
                "consequence": "Your wealth is safe but stagnant, losing value against the rising costs of the city.",
                "xp": 100,
                "impact": {
                  "stoicism": 1
                },
                "trait": "+Caution"
              },
              {
                "id": "consult-a-certified-advi",
                "label": "Consult a certified advisor who has retired wealthy.",
                "mentor": "Seek the man who has already walked the path you desire. His gray hairs are the maps to the treasures you seek.",
                "consequence": "The advisor exposes the influencer's scheme and helps you find a diversified, profitable long-term path.",
                "xp": 290,
                "impact": {
                  "finance": 8
                },
                "trait": "+Prudence"
              }
            ]
          },
          {
            "id": "babylon-c1-s2-sc3",
            "title": "The Family Loan",
            "setup": "Your cousin wants to start an exotic jewelry import business and asks for a significant loan. He has plenty of passion but has never worked in trade or retail.",
            "choices": [
              {
                "id": "lend-the-money-out-of-lo",
                "label": "Lend the money out of loyalty.",
                "mentor": "Small kindnesses can become great weights when they are not bound by logic. You have given your arrows to a man who cannot see the target.",
                "consequence": "The inventory is seized at the border due to paperwork errors; your cousin stops taking your calls.",
                "xp": 40,
                "impact": {
                  "negotiation": -6
                },
                "trait": "-Awareness"
              },
              {
                "id": "offer-to-connect-him-wit",
                "label": "Offer to connect him with a veteran importer instead.",
                "mentor": "You give him a gift far greater than gold: the chance to learn the laws of the sea from an old captain.",
                "consequence": "Your cousin learns the risks, pivots his business model, and eventually succeeds without needing your loan.",
                "xp": 260,
                "impact": {
                  "strategy": 6
                },
                "trait": "+Leadership"
              },
              {
                "id": "request-a-detailed-busin",
                "label": "Request a detailed business plan before deciding.",
                "mentor": "Words on parchment are but shadows of action. Look deeper into who shall guide his hand when the gold arrives.",
                "consequence": "The business plan looks okay on paper, but you remain uneasy and only lend a small, manageable amount.",
                "xp": 150,
                "impact": {
                  "finance": 3
                },
                "trait": "+Analysis"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "babylon-c1-s2-rf1",
            "prompt": "Identify one person in your life you currently look to for financial advice—do they actually possess the 'gold' and stability you wish to achieve for yourself?"
          },
          {
            "id": "babylon-c1-s2-rf2",
            "prompt": "Recall a time you followed the advice of someone who was enthusiastic but inexperienced. What was the hidden cost of that 'free' counsel?"
          }
        ]
      }
    ]
  },
  {
    "id": "babylon-c2",
    "title": "The First Cure: Start Thy Purse to Fattening",
    "summary": "Building a fortune requires building the habit of keeping a portion of every coin earned for yourself.",
    "sections": [
      {
        "id": "babylon-c2-s1",
        "title": "The Ten Percent Rule",
        "principle": "Keep at least one-tenth of all you earn for your future self.",
        "scenarios": [
          {
            "id": "babylon-c2-s1-sc1",
            "title": "The Golden Harvest",
            "setup": "The month’s labor is finished, and your purse hangs heavy with ten silver coins. As you pass the market, fragrant spices and fine linens call to you, promising the comfort you feel you have earned.",
            "choices": [
              {
                "id": "tithe-a-silver-coin-to-y",
                "label": "Tithe a silver coin to your savings first",
                "mentor": "A part of all thou earneth is thine to keep. Like a seed planted in fertile soil, this single coin shall grow into a mighty tree of wealth.",
                "consequence": "You feel a surge of quiet pride. In one year, you will possess a small treasure that works while you sleep.",
                "xp": 280,
                "impact": {
                  "finance": 8
                },
                "trait": "+Discipline"
              },
              {
                "id": "buy-a-small-gift-for-you",
                "label": "Buy a small gift for yourself and save the change",
                "mentor": "Thou hast a kind heart toward thyself, but a leaky bucket cannot hold the life-giving water of the Euphrates.",
                "consequence": "The trinket brings fleeting joy, but your savings remain a pittance that barely covers a day's bread.",
                "xp": 120,
                "impact": {
                  "discipline": 2
                },
                "trait": "+Gratification"
              },
              {
                "id": "purchase-the-finest-tuni",
                "label": "Purchase the finest tunic to impress your peers",
                "mentor": "The merchant grows fat on thy vanity, while thou remainest a slave to the coin of others.",
                "consequence": "You look like a prince but feel like a pauper. When the harvest fails, you will have only silk to eat.",
                "xp": 50,
                "impact": {
                  "emotionalControl": -5
                },
                "trait": "-Finance"
              }
            ]
          },
          {
            "id": "babylon-c2-s1-sc2",
            "title": "The Unexpected Windfall",
            "setup": "A distant relative leaves you a modest sum of 500 drachma. Your friends urge you to host a grand feast to celebrate your good fortune.",
            "choices": [
              {
                "id": "host-a-modest-dinner-and",
                "label": "Host a modest dinner and lock away 50 drachma",
                "mentor": "Thy friends' bellies will soon be empty again, but thy future self will bless thy name for this ten percent.",
                "consequence": "Loyalty is shared over bread, yet your safety net grows stronger. You are becoming a master of your gold.",
                "xp": 250,
                "impact": {
                  "strategy": 7
                },
                "trait": "+Strategy"
              },
              {
                "id": "invest-the-entire-sum-in",
                "label": "Invest the entire sum in a friend's risky jewel trade",
                "mentor": "To seek the advice of a brick-maker on jewels is folly. Guard thy gold from the entice of quick gain.",
                "consequence": "The gamble might pay off, but your lack of a reserve fund leaves you trembling at every market rumor.",
                "xp": 150,
                "impact": {
                  "finance": 4
                },
                "trait": "+Risk"
              },
              {
                "id": "spend-it-all-on-a-celebr",
                "label": "Spend it all on a celebratory feast and wine",
                "mentor": "Thou art like a man who kills his cow to feast for a night, then wails when there is no milk for the children.",
                "consequence": "A hangover and a heavy heart follow. You have traded a lifetime of security for one night of noise.",
                "xp": 40,
                "impact": {
                  "stoicism": -6
                },
                "trait": "-Discipline"
              }
            ]
          },
          {
            "id": "babylon-c2-s1-sc3",
            "title": "The Lean Season",
            "setup": "Work has been scarce, and you have earned barely enough to cover your rent and basic food. You wonder if you can afford to pay yourself this month.",
            "choices": [
              {
                "id": "set-aside-ten-percent-an",
                "label": "Set aside ten percent anyway, cutting your food budget",
                "mentor": "If thou canst not save when the coins are few, thou wilt never keep them when they are many. This hunger is the fire that tempers the blade of will.",
                "consequence": "Your stomach growls, but your spirit is iron. You have proven you are the master of your desires.",
                "xp": 300,
                "impact": {
                  "discipline": 8
                },
                "trait": "+Stoicism"
              },
              {
                "id": "pay-only-half-of-the-ten",
                "label": "Pay only half of the ten percent this time",
                "mentor": "A half-measure is a half-built wall. It may stop a breeze, but the storm of poverty will surely knock it down.",
                "consequence": "You feel relief today, but the habit of self-neglect has begun to rot your resolve.",
                "xp": 110,
                "impact": {
                  "finance": 1
                },
                "trait": "-Consistency"
              },
              {
                "id": "skip-your-savings-to-pay",
                "label": "Skip your savings to pay all creditors in full",
                "mentor": "Why dost thou labor to fill the purses of others while leaving thine own empty like a dried well?",
                "consequence": "Your creditors respect you, but you remain their servant. Your own future is delayed yet again.",
                "xp": 60,
                "impact": {
                  "mindset": -4
                },
                "trait": "+Compliance"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "babylon-c2-s1-rf1",
            "prompt": "Look back at your spending this past week. If you had saved exactly ten percent of everything you touched, what small luxury would you have had to skip, and how would that sacrifice feel a year from today?"
          },
          {
            "id": "babylon-c2-s1-rf2",
            "prompt": "Arkad says that gold 'clings' to the man who treats it with respect. In what ways have you ignored your own future needs to satisfy a craving that lasted less than an hour?"
          }
        ]
      },
      {
        "id": "babylon-c2-s2",
        "title": "The Power of Accumulation",
        "principle": "Small amounts saved regularly grow into significant wealth through consistency.",
        "scenarios": [
          {
            "id": "babylon-c2-s2-sc1",
            "title": "The Copper Rain",
            "setup": "After a grueling day hauling goods at the marketplace, you receive ten copper coins. The smell of roasted meats and the call of the tavern beckon you to celebrate your exhaustion with your friends.",
            "choices": [
              {
                "id": "place-one-copper-coin-in",
                "label": "Place one copper coin in your heavy oak chest immediately.",
                "mentor": "Even as the smallest stream eventually fills the great Euphrates, this single coin is the seed of your future orchard.",
                "consequence": "You feel a quiet pride as your chest clinches its first inhabitant; your friends mock you briefly, but your hunger for security is fed.",
                "xp": 280,
                "impact": {
                  "discipline": 8
                },
                "trait": "+Discipline"
              },
              {
                "id": "spend-all-ten-coins-on-a",
                "label": "Spend all ten coins on a lavish feast to restore your energy.",
                "mentor": "You feed your stomach for a night, but you leave your future to starve in the barren desert of tomorrow.",
                "consequence": "The meal is delicious, but you wake up with an empty purse and the crushing weight of having to labor just to eat again.",
                "xp": 50,
                "impact": {
                  "finance": -5
                },
                "trait": "-Wealth"
              },
              {
                "id": "save-five-coins-today-bu",
                "label": "Save five coins today but plan to spend more tomorrow to make up for it.",
                "mentor": "To feast today and fast tomorrow is the rhythm of the fool; seek instead the steady heartbeat of the consistent saver.",
                "consequence": "You have a small reserve, but your lack of a sustainable system makes you anxious about your upcoming expenses.",
                "xp": 120,
                "impact": {
                  "strategy": 2
                },
                "trait": "Inconsistent"
              }
            ]
          },
          {
            "id": "babylon-c2-s2-sc2",
            "title": "The Weaver's Incentive",
            "setup": "Your master offers a small bonus for finishing your rugs ahead of schedule. Though it is not much, it is the first 'extra' money you have seen in months.",
            "choices": [
              {
                "id": "upgrade-your-worn-sandal",
                "label": "Upgrade your worn sandals to improve your daily comfort.",
                "mentor": "A man must walk comfortably, yet if every extra coin goes to the cobbler, the weaver remains a slave to his feet.",
                "consequence": "Your feet ache less, but the 'bonus' has vanished, leaving your savings account as empty as it was before the extra work.",
                "xp": 110,
                "impact": {
                  "emotionalControl": 1
                },
                "trait": "Short-term Thinking"
              },
              {
                "id": "deposit-the-entire-bonus",
                "label": "Deposit the entire bonus into your growing 'Wealth Fund'.",
                "mentor": "The gold you keep is a slave that works for you; by saving this bonus, you have birthed a new laborer for your cause.",
                "consequence": "You see your total crack the first major milestone; the habit of saving 'found money' begins to feel automatic.",
                "xp": 300,
                "impact": {
                  "finance": 7
                },
                "trait": "+Frugality"
              },
              {
                "id": "buy-a-round-of-drinks-fo",
                "label": "Buy a round of drinks for the workshop to gain popularity.",
                "mentor": "The cheers of men are like the wind in the grass—loud for a moment, then gone, leaving the earth as dry as before.",
                "consequence": "You gain temporary social status, but one week later, no one remembers the drink and you are still broke.",
                "xp": 60,
                "impact": {
                  "finance": -4
                },
                "trait": "-Focus"
              }
            ]
          },
          {
            "id": "babylon-c2-s2-sc3",
            "title": "The Subscription Trap",
            "setup": "You realize you are paying for three different scrolls of news and entertainment that you barely read. Canceling them would save you just a few silvers a month.",
            "choices": [
              {
                "id": "keep-them-all-it-is-too-",
                "label": "Keep them all; it is too much effort to cancel for such small change.",
                "mentor": "A small hole can sink a great ship if left unpatched. Every silver that escapes is a lost soldier from your army.",
                "consequence": "Small monthly leaks continue to drain your potential wealth; you remain stressed about 'where the money goes'.",
                "xp": 45,
                "impact": {
                  "mindset": -6
                },
                "trait": "Negligence"
              },
              {
                "id": "cancel-two-and-redirect-",
                "label": "Cancel two and redirect those silvers into a locked savings jar.",
                "mentor": "You have captured the strays! These silvers, once wandering, will now build the walls of your own palace.",
                "consequence": "Over time, you realize you don't miss the content, and the jar grows surprisingly heavy by the year's end.",
                "xp": 260,
                "impact": {
                  "strategy": 6
                },
                "trait": "+Awareness"
              },
              {
                "id": "cancel-all-of-them-but-u",
                "label": "Cancel all of them but use the saved money to buy a nicer dinner.",
                "mentor": "You have stopped the leak only to pour the water into the sand. Transfer the coin from one hand to the other, but keep it!",
                "consequence": "You haven't increased your wealth, but you have simplified your life slightly. Your net worth remains flat.",
                "xp": 130,
                "impact": {
                  "discipline": 2
                },
                "trait": "Neutral"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "babylon-c2-s2-rf1",
            "prompt": "Look at the 'small' recurring expenses in your current life. Which one would you be most unwilling to sacrifice, and what does that reveal about what you truly value?"
          },
          {
            "id": "babylon-c2-s2-rf2",
            "prompt": "If you started keeping exactly one-tenth of everything you earned today, what is the first dream or goal that would suddenly feel achievable within a few years?"
          }
        ]
      }
    ]
  },
  {
    "id": "babylon-c3",
    "title": "The Second Cure: Control Thy Expenditures",
    "summary": "Distinguishing between necessary expenses and casual desires prevents lifestyle creep from consuming your savings.",
    "sections": [
      {
        "id": "babylon-c3-s1",
        "title": "The Illusion of Necessity",
        "principle": "What we call necessary expenses will always grow to equal our income unless we protest.",
        "scenarios": [
          {
            "id": "babylon-c3-s1-sc1",
            "title": "The Upgraded Dwelling",
            "setup": "Your income has increased by ten copper pieces, and you feel the urge to move to a larger home near the city gates. The new rooms are grander, but the rent will consume every extra coin you have earned.",
            "choices": [
              {
                "id": "remain-in-your-current-m",
                "label": "Remain in your current modest home",
                "mentor": "The gold that stays in your purse is the seed of a future forest. Do not let a larger roof leak away thy newfound prosperity.",
                "consequence": "You accumulate a surplus of gold while maintaining a peaceful, simple life. You are prepared for future investments.",
                "xp": 250,
                "impact": {
                  "finance": 8
                },
                "trait": "+Discipline"
              },
              {
                "id": "move-to-the-new-home-but",
                "label": "Move to the new home but work longer hours",
                "mentor": "Thou art trading thy life's breath for stone and mortar. Even a palace feels like a cage if the inhabitant is a slave to the rent.",
                "consequence": "You live in luxury but suffer from constant exhaustion and have zero savings at month's end.",
                "xp": 120,
                "impact": {
                  "discipline": 2
                },
                "trait": "+Status"
              },
              {
                "id": "rent-the-larger-home-and",
                "label": "Rent the larger home and buy new furniture on credit",
                "mentor": "To dress a desire in the robes of necessity is to invite the debt-collector to thy table. Thy gold has fled before it was even thine.",
                "consequence": "High stress from mounting debt and an immediate loss of financial freedom as creditors begin to circle.",
                "xp": 45,
                "impact": {
                  "emotionalControl": -5
                },
                "trait": "-Finance"
              }
            ]
          },
          {
            "id": "babylon-c3-s1-sc2",
            "title": "The Silk Merchant's Temptation",
            "setup": "A traveling merchant displays a tunic of rare crimson silk that matches your status perfectly. You find yourself justifying the cost by telling yourself you need it to impress your business associates.",
            "choices": [
              {
                "id": "purchase-a-clean-durable",
                "label": "Purchase a clean, durable woolen tunic instead",
                "mentor": "A man’s worth is measured by the weight of his purse, not the shimmer of his cloth. Let thy character be thy finest garment.",
                "consequence": "You look respectable and professional while retaining the bulk of your gold for profitable lending.",
                "xp": 210,
                "impact": {
                  "stoicism": 7
                },
                "trait": "+Stoicism"
              },
              {
                "id": "buy-the-silk-tunic-as-a-",
                "label": "Buy the silk tunic as a 'reward' for your hard work",
                "mentor": "Desires are like weeds that grow in a garden; if thou waterest them all, they shall choke the fruit of thy labor.",
                "consequence": "Brief emotional satisfaction followed by the realization that your associates care more about your deals than your outfit.",
                "xp": 90,
                "impact": {
                  "mindset": -2
                },
                "trait": "+Ego"
              },
              {
                "id": "buy-the-silk-tunic-and-m",
                "label": "Buy the silk tunic and matching sandals",
                "mentor": "Alas, thou hast confused a whim with a hunger. Thy gold has been cast into the wind for a shadow of vanity.",
                "consequence": "You have no silver left for the week's expenses, forcing you to skip meals to maintain your appearance.",
                "xp": 50,
                "impact": {
                  "strategy": -6
                },
                "trait": "-Discipline"
              }
            ]
          },
          {
            "id": "babylon-c3-s1-sc3",
            "title": "The Feast of Friends",
            "setup": "Your neighbors are hosting a lavish feast and expect everyone to contribute a high-priced delicacy. Choosing a cheaper contribution might feel embarrassing, but the required delicacy costs a full week's wages.",
            "choices": [
              {
                "id": "bring-a-wholesome-afford",
                "label": "Bring a wholesome, affordable dish and endure the gossip",
                "mentor": "Better to face the quiet whispers of the foolish than the loud cries of a starving belly. Prattle costs nothing; gold is precious.",
                "consequence": "You maintain your budget and learn who your true friends are—those who value your presence over your plate.",
                "xp": 280,
                "impact": {
                  "emotionalControl": 6
                },
                "trait": "+Confidence"
              },
              {
                "id": "split-the-cost-of-the-de",
                "label": "Split the cost of the delicacy with a neighbor",
                "mentor": "Thou art seeking a middle path, but thou art still feeding a fire that consumes thy future grain.",
                "consequence": "You save some face and some coin, but you are still prioritizing social optics over your financial goals.",
                "xp": 140,
                "impact": {
                  "negotiation": 3
                },
                "trait": "Neutral"
              },
              {
                "id": "buy-the-expensive-delica",
                "label": "Buy the expensive delicacy to prove your success",
                "mentor": "Thou hast let the eyes of others pick thy pocket. How canst thou rule a kingdom if thou canst not rule thy fear of shame?",
                "consequence": "You are greeted with applause at the feast, but return home to an empty larder and a week of hunger.",
                "xp": 40,
                "impact": {
                  "finance": -4
                },
                "trait": "-Strategy"
              }
            ]
          }
        ],
        "reflections": []
      },
      {
        "id": "babylon-c3-s2",
        "title": "Budgeting for Joy",
        "principle": "Live on less than you earn to ensure your purse remains full without sacrificing basic needs.",
        "scenarios": [
          {
            "id": "babylon-c3-s2-sc1",
            "title": "The Merchant's Celebration",
            "setup": "After a moon of hard labor, your purse is heavy with ten gold pieces. Your friends invite you to a feast featuring expensive spiced wine and silk-clad dancers to celebrate the harvest.",
            "choices": [
              {
                "id": "attend-the-feast-but-lim",
                "label": "Attend the feast but limit your spending to one copper for simple bread and ale.",
                "mentor": "A man who masters his appetites before they master him shall always have a full granary. You have tasted joy without thinning your purse.",
                "consequence": "You enjoy the company and wake up with no debt and nine gold pieces still tucked away.",
                "xp": 280,
                "impact": {
                  "discipline": 8
                },
                "trait": "+Discipline"
              },
              {
                "id": "pay-for-the-group-s-firs",
                "label": "Pay for the group's first round of wine to show your success.",
                "mentor": "Generosity is a noble vine, but if it grows too fast, it will pull down the walls of your own house. Be careful not to buy friends with gold.",
                "consequence": "You feel popular for a night, but two gold pieces vanish, delaying your investment goals.",
                "xp": 120,
                "impact": {
                  "emotionalControl": 2
                },
                "trait": "+Charisma"
              },
              {
                "id": "immerse-yourself-in-the-",
                "label": "Immerse yourself in the luxury, spending three gold pieces on the finest entertainment.",
                "mentor": "That which you call a 'necessary' luxury is merely a weed that chokes the gold tree you seek to grow. You have eaten your future seeds.",
                "consequence": "A night of blurry joy leaves you with a headache and a dangerously light purse for next month's rent.",
                "xp": 50,
                "impact": {
                  "finance": -5
                },
                "trait": "-Finance"
              }
            ]
          },
          {
            "id": "babylon-c3-s2-sc2",
            "title": "The Upgraded Tunic",
            "setup": "Your current garments are sturdy but plain compared to the vibrant dyes worn by the rising clerks. You feel a deep urge to buy a new robe to fit in at the marketplace.",
            "choices": [
              {
                "id": "repair-your-current-tuni",
                "label": "Repair your current tunic and add a small, inexpensive trim for a fresh look.",
                "mentor": "True stature comes from the weight of your coins, not the shimmer of your cloth. You have satisfied the eye without starving the purse.",
                "consequence": "You look presentable and retain the capital needed to start your small lending venture.",
                "xp": 250,
                "impact": {
                  "stoicism": 7
                },
                "trait": "+Frugality"
              },
              {
                "id": "buy-the-expensive-robe-o",
                "label": "Buy the expensive robe on credit from the weaver, promising next month's silver.",
                "mentor": "To borrow for vanity is to tie a millstone around your neck and jump into the Euphrates. The weaver now owns your freedom.",
                "consequence": "You look wealthy but feel constant anxiety as the debt looms over your daily earnings.",
                "xp": 40,
                "impact": {
                  "strategy": -6
                },
                "trait": "-Freedom"
              },
              {
                "id": "save-half-the-cost-this-",
                "label": "Save half the cost this month and wait to buy it until you have the full amount.",
                "mentor": "Patience is a shield against regret. If you still desire it when the gold is ready, then it is a chosen joy, not a fleeting whim.",
                "consequence": "You delay gratification, learning the discipline of saving while avoiding interest payments.",
                "xp": 180,
                "impact": {
                  "discipline": 4
                },
                "trait": "+Patience"
              }
            ]
          },
          {
            "id": "babylon-c3-s2-sc3",
            "title": "The Tool of the Trade",
            "setup": "A traveling smith offers you a specialized tool that would make your daily work easier but costs exactly what you have saved for emergencies. It is shiny, new, and tempting.",
            "choices": [
              {
                "id": "decline-the-purchase-and",
                "label": "Decline the purchase and continue using your reliable, older tools.",
                "mentor": "Confuse not the desire for a new toy with the need for a better tool. Your old hammer still strikes true, and your gold remains your guard.",
                "consequence": "Your emergency fund remains intact, providing peace of mind during a sudden work shortage.",
                "xp": 220,
                "impact": {
                  "mindset": 6
                },
                "trait": "+Prudence"
              },
              {
                "id": "negotiate-to-trade-some-",
                "label": "Negotiate to trade some of your existing surplus grain for the tool instead of gold.",
                "mentor": "A clever trade preserves the gold in your purse. You have found a way to grow without bleeding your lifeblood.",
                "consequence": "You get the tool, but your food stores are now low, forcing you to work harder for sustenance.",
                "xp": 160,
                "impact": {
                  "negotiation": 5
                },
                "trait": "+Negotiation"
              },
              {
                "id": "buy-it-immediately-convi",
                "label": "Buy it immediately, convinced it will make you work twice as fast.",
                "mentor": "Many a man has gone hungry while holding a silver shovel. Efficiency is a ghost if it leaves you with no buffer against fate.",
                "consequence": "The tool is fine, but you have zero savings when your roof begins to leak a week later.",
                "xp": 60,
                "impact": {
                  "finance": -4
                },
                "trait": "-Security"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "babylon-c3-s2-rf1",
            "prompt": "Look at your recent bank statements or receipts. Which purchase felt like a 'necessary expense' at the time, but in hindsight, was merely a 'casual desire' that failed to bring lasting joy?"
          },
          {
            "id": "babylon-c3-s2-rf2",
            "prompt": "If you were forced to live on only 70% of your current income starting tomorrow, what specific luxuries would be the hardest to cut, and why do they hold such power over you?"
          }
        ]
      }
    ]
  },
  {
    "id": "babylon-c4",
    "title": "The Third Cure: Make Thy Gold Multiply",
    "summary": "Wealth is not just a hoard of coins, but the passive income generated by those coins working for you.",
    "sections": [
      {
        "id": "babylon-c4-s1",
        "title": "Putting Gold to Work",
        "principle": "Every coin saved is a slave that works to earn more coins for its master.",
        "scenarios": [
          {
            "id": "babylon-c4-s1-sc1",
            "title": "The Silent Apprentice",
            "setup": "You have saved a modest sum from your salary and it sits idle in a zero-interest account. A neighbor offers you a small share in his successful brick-making kiln, promising a steady portion of the monthly profits. You feel the primitive urge to keep the gold under your mattress where it is 'safe'.",
            "choices": [
              {
                "id": "invest-the-gold-into-the",
                "label": "Invest the gold into the kiln share",
                "mentor": "Even as you sleep, the heat of the kiln shall bake your wealth into a larger hoard. You have turned a static coin into a living servant.",
                "consequence": "You receive your first dividend payment next month; your passive income stream is officially born.",
                "xp": 250,
                "impact": {
                  "finance": 8
                },
                "trait": "+Vision"
              },
              {
                "id": "keep-the-money-in-your-s",
                "label": "Keep the money in your savings account",
                "mentor": "A coin in a box is a lazy servant that refuses to toil. It guards itself, but it brings no brothers home to join the pile.",
                "consequence": "Your principal remains safe from risk, but inflation slowly erodes its purchasing power over the year.",
                "xp": 100,
                "impact": {
                  "mindset": 2
                },
                "trait": "+Caution"
              },
              {
                "id": "spend-the-savings-on-a-c",
                "label": "Spend the savings on a celebratory feast",
                "mentor": "You have slain the very children of your fortune before they could grow to work for you. Hunger returns, but the gold is gone forever.",
                "consequence": "You enjoy a night of luxury, but return to a zero balance with no workers toiling in your name.",
                "xp": 45,
                "impact": {
                  "discipline": -5
                },
                "trait": "-Discipline"
              }
            ]
          },
          {
            "id": "babylon-c4-s1-sc2",
            "title": "The Lending Decision",
            "setup": "A trustworthy shield-maker needs a loan to buy bronze in bulk and offers to pay you back with a tenth part extra in six months. However, a silver-tongued traveler asks for the same amount to gamble on a 'guaranteed' trade route in a distant land.",
            "choices": [
              {
                "id": "loan-to-the-shield-maker",
                "label": "Loan to the shield-maker with interest",
                "mentor": "Put your gold with those who know their craft, for their skills are the soil in which your gold shall grow surely.",
                "consequence": "Regular interest payments begin, and the principal is returned safely with a surplus.",
                "xp": 280,
                "impact": {
                  "strategy": 7
                },
                "trait": "+Strategy"
              },
              {
                "id": "decline-both-to-avoid-al",
                "label": "Decline both to avoid all risk",
                "mentor": "To fear the loss is natural, but to fear the growth is to remain a servant to your own labor for all your days.",
                "consequence": "You miss an opportunity for growth; your wealth remains stagnant while others prosper around you.",
                "xp": 80,
                "impact": {
                  "stoicism": 1
                },
                "trait": "+Security"
              },
              {
                "id": "fund-the-traveler-s-risk",
                "label": "Fund the traveler's risky trade route",
                "mentor": "Gold flees from the man who invests in errands he does not understand. You have sent your servant into a storm without a compass.",
                "consequence": "The traveler disappears, and your hard-earned savings are lost to an empty promise.",
                "xp": 50,
                "impact": {
                  "finance": -6
                },
                "trait": "-Logic"
              }
            ]
          },
          {
            "id": "babylon-c4-s1-sc3",
            "title": "The Reinvestment Choice",
            "setup": "Your first 'gold slave'—a small dividend from a stock—has just paid out fifty pieces of silver. You can use this extra money to buy a luxury garment you've wanted, or you can add it back to the investment to increase next month's yield.",
            "choices": [
              {
                "id": "reinvest-the-dividend-im",
                "label": "Reinvest the dividend immediately",
                "mentor": "You have taught the children of your gold to labor alongside their parents. This is the secret to a mountain that grows itself.",
                "consequence": "Compound growth accelerates; your future earnings increase exponentially without further effort from you.",
                "xp": 300,
                "impact": {
                  "discipline": 8
                },
                "trait": "+Patience"
              },
              {
                "id": "keep-the-silver-in-cash-",
                "label": "Keep the silver in cash for emergencies",
                "mentor": "A reserve is wise, but do not let your army of silver sit in the barracks when the fields are ready for planting.",
                "consequence": "You feel more secure, but your wealth-building engine slows down significantly.",
                "xp": 120,
                "impact": {
                  "emotionalControl": 3
                },
                "trait": "+Prudence"
              },
              {
                "id": "buy-the-luxury-garment",
                "label": "Buy the luxury garment",
                "mentor": "You eat the seeds of your harvest and wonder why the next season brings no crop. A man's vanity is an expensive master.",
                "consequence": "You look successful to others, but your passive income stays flat, delaying your financial freedom.",
                "xp": 60,
                "impact": {
                  "mindset": -4
                },
                "trait": "-Foresight"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "babylon-c4-s1-rf1",
            "prompt": "Look at your current bank balance or savings. If every dollar was a servant, how many are currently working for you, and how many are simply 'sleeping'?"
          },
          {
            "id": "babylon-c4-s1-rf2",
            "prompt": "What is one 'luxury' you recently purchased that cost you the potential 'children' (future earnings) of that money? How does that trade-off feel now?"
          }
        ]
      },
      {
        "id": "babylon-c4-s2",
        "title": "The Compounding Stream",
        "principle": "Create a golden stream of income that flows constantly into your purse whether you work or travel.",
        "scenarios": [
          {
            "id": "babylon-c4-s2-sc1",
            "title": "The Weaver's Loom",
            "setup": "You have saved enough silver to buy your own loom, but a merchant offers you a partnership. Instead of weaving yourself, you provide the tools for two young apprentices who will share their profits with you monthly.",
            "choices": [
              {
                "id": "provide-the-looms-for-a-",
                "label": "Provide the looms for a recurring share of the fabric sales.",
                "mentor": "Even as thou sleepest, the clatter of those looms shall be the music of gold marching into thy purse.",
                "consequence": "Regular passive income begins; you spend your time studying other trades. +150 Monthly Gold.",
                "xp": 280,
                "impact": {
                  "finance": 7
                },
                "trait": "+Foresight"
              },
              {
                "id": "work-the-loom-solo-to-ke",
                "label": "Work the loom solo to keep 100% of the immediate profit.",
                "mentor": "Thou hast a strong arm, but when thy arm tires, thy wealth ceases to grow. A laborer is not yet a master.",
                "consequence": "High immediate cash but you are exhausted and have no time to seek new streams. Stress increases.",
                "xp": 120,
                "impact": {
                  "discipline": 2
                },
                "trait": "+WorkEthic"
              },
              {
                "id": "buy-a-decorative-loom-to",
                "label": "Buy a decorative loom to impress neighboring craftsmen.",
                "mentor": "A gilded tool that produces nothing is but a hungry guest at thy table, eating thy future.",
                "consequence": "You have a beautiful piece of furniture but no income. Debt begins to creep in.",
                "xp": 50,
                "impact": {
                  "mindset": -4
                },
                "trait": "-Finance"
              }
            ]
          },
          {
            "id": "babylon-c4-s2-sc2",
            "title": "The Shield Maker's Proposition",
            "setup": "A dependable shield maker needs a loan to fulfill a royal army contract. He offers to pay you back in quarterly installments with a portion of every shield sold thereafter.",
            "choices": [
              {
                "id": "loan-the-gold-for-a-perm",
                "label": "Loan the gold for a permanent royalty on his shop's output.",
                "mentor": "Thy gold becomes a tireless worker, hammering out new coins for thee in a forge thou needst not tend.",
                "consequence": "The contract is a success; a steady golden stream flows into your purse for years.",
                "xp": 300,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Leverage"
              },
              {
                "id": "refuse-the-loan-to-keep-",
                "label": "Refuse the loan to keep your coins safe in a locked chest.",
                "mentor": "Gold that sits idle in a dark box grows no family. It is a lonely seed that will never see the harvest.",
                "consequence": "Your wealth is safe but stagnant. Inflation slowly erodes your purchasing power.",
                "xp": 90,
                "impact": {
                  "emotionalControl": 1
                },
                "trait": "-Growth"
              },
              {
                "id": "loan-the-gold-but-demand",
                "label": "Loan the gold but demand all interest be paid in luxury wine upfront.",
                "mentor": "Thou art drinking thy children's inheritance before they are even born. Shame on a thirsty man's logic.",
                "consequence": "You enjoy a week of revelry, but the capital is gone and you have no recurring income.",
                "xp": 45,
                "impact": {
                  "finance": -6
                },
                "trait": "-Discipline"
              }
            ]
          },
          {
            "id": "babylon-c4-s2-sc3",
            "title": "The Orchard Opportunity",
            "setup": "A plot of land is for sale nearby. You can either plant wheat for a quick season harvest or olive trees which take years to mature but produce for generations.",
            "choices": [
              {
                "id": "plant-the-olive-grove-an",
                "label": "Plant the olive grove and wait for the oil to flow.",
                "mentor": "Patience is the soil in which the most enduring wealth takes root. The oil shall light thy way forever.",
                "consequence": "Early years are lean, but you eventually secure a retirement of effortless abundance.",
                "xp": 260,
                "impact": {
                  "stoicism": 6
                },
                "trait": "+Patience"
              },
              {
                "id": "plant-wheat-every-season",
                "label": "Plant wheat every season for the immediate cash flow.",
                "mentor": "Thou art a slave to the seasons. If the rain fails one year, thy purse shall be as dry as the dust.",
                "consequence": "You have steady money for bills, but you can never stop working the land yourself.",
                "xp": 110,
                "impact": {
                  "discipline": 3
                },
                "trait": "+Reliability"
              },
              {
                "id": "build-a-summer-villa-on-",
                "label": "Build a summer villa on the land for your own rest.",
                "mentor": "A man who builds a house of rest before he builds a house of profit will soon find himself restless and poor.",
                "consequence": "Maintenance costs drain your savings. You must take a second job to pay for the villa.",
                "xp": 60,
                "impact": {
                  "strategy": -5
                },
                "trait": "-Foresight"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "babylon-c4-s2-rf1",
            "prompt": "Look at your current sources of income. How much of your money comes from your 'clanging loom' (active labor) versus a 'golden stream' (passive growth)?"
          },
          {
            "id": "babylon-c4-s2-rf2",
            "prompt": "If you could no longer work starting tomorrow, for how many months would your current 'golden streams' sustain your lifestyle?"
          }
        ]
      }
    ]
  },
  {
    "id": "babylon-c5",
    "title": "The Fourth Cure: Guard Thy Treasures from Loss",
    "summary": "Security of the principal is the highest priority in any investment strategy.",
    "sections": [
      {
        "id": "babylon-c5-s1",
        "title": "The Risk of Get-Rich-Quick",
        "principle": "Protect your capital against loss by investing only where your principal is safe.",
        "scenarios": [
          {
            "id": "babylon-c5-s1-sc1",
            "title": "The Crypto Craze",
            "setup": "A childhood friend shows you a private Discord group for a new digital coin promised to 'moon' by next week. They urge you to put your entire emergency fund into it before the general public finds out.",
            "choices": [
              {
                "id": "all-in-on-the-hype",
                "label": "All-in on the hype",
                "mentor": "He who seeks to double his gold in a single moon-cycle often finds his hands empty before the sun sets. You have mistaken gambling for growth.",
                "consequence": "The coin crashes to zero within 48 hours. Your savings are gone and your stress levels peak.",
                "xp": 40,
                "impact": {
                  "finance": -6
                },
                "trait": "-Finance"
              },
              {
                "id": "research-the-underlying-",
                "label": "Research the underlying utility first",
                "mentor": "Curiosity is a sharp tool, but be wary of looking so deep into a hole that you fall inside. Information alone does not secure the principal.",
                "consequence": "You spend days investigating only to find a hollow project. You saved your money, but wasted significant time.",
                "xp": 120,
                "impact": {
                  "strategy": 2
                },
                "trait": "+Strategy"
              },
              {
                "id": "decline-to-risk-the-prin",
                "label": "Decline to risk the principal",
                "mentor": "The first rule of gold is to keep it safe. Better a modest gain later than a certain loss today, for a dead tree bears no fruit.",
                "consequence": "You maintain your financial security. Weeks later, you see the news of the rug-pull and feel immense relief.",
                "xp": 280,
                "impact": {
                  "discipline": 8
                },
                "trait": "+Discipline"
              }
            ]
          },
          {
            "id": "babylon-c5-s1-sc2",
            "title": "The Brother-in-Law’s Retail Dream",
            "setup": "Your relative wants to open a specialty boutique and asks for a large loan. He has no experience in retail but promises a high interest return because 'family matters most.'",
            "choices": [
              {
                "id": "direct-him-to-profession",
                "label": "Direct him to professional lenders",
                "mentor": "Entrust not thy gold to a brick-maker to buy jewels. If a man knows not the trade he seeks to enter, thy gold shall surely vanish like smoke.",
                "consequence": "Family tension arises briefly, but your capital remains safe while he learns the industry on his own dime.",
                "xp": 250,
                "impact": {
                  "emotionalControl": 7
                },
                "trait": "+Discipline"
              },
              {
                "id": "offer-a-tiny-fraction-as",
                "label": "Offer a tiny fraction as a gift",
                "mentor": "Charity is noble, but call it what it is. Do not expect the return of gold placed in the hands of the unskilled.",
                "consequence": "The business fails, but your overall portfolio is unharmed. You preserved the relationship at a small cost.",
                "xp": 150,
                "impact": {
                  "finance": 1
                },
                "trait": "+Mindset"
              },
              {
                "id": "fund-the-entire-dream",
                "label": "Fund the entire dream",
                "mentor": "Alas, you have cast your hard-earned grain onto parched rocks. Love is a poor shield for a failing business model.",
                "consequence": "The shop closes in six months. You lose your money and the relationship is permanently strained by the debt.",
                "xp": 50,
                "impact": {
                  "negotiation": -5
                },
                "trait": "-Finance"
              }
            ]
          },
          {
            "id": "babylon-c5-s1-sc3",
            "title": "The Guaranteed Edge",
            "setup": "An offshore investment firm promises a guaranteed 20% monthly return through a 'proprietary algorithm.' The glossy brochure looks professional, but you don't understand how they generate profit.",
            "choices": [
              {
                "id": "trust-the-professional-b",
                "label": "Trust the professional branding",
                "mentor": "Even a thief may wear a fine linen robe. If the path to gold is hidden by shadows, do not walk it.",
                "consequence": "It is revealed to be a Ponzi scheme. Your principal is frozen in legal battles for years.",
                "xp": 45,
                "impact": {
                  "stoicism": -4
                },
                "trait": "-Strategy"
              },
              {
                "id": "consult-with-a-trusted-f",
                "label": "Consult with a trusted fiduciary",
                "mentor": "Counsel with wise men who handle gold every day. Their wisdom is a wall that protects thy treasure from the arrows of deceivers.",
                "consequence": "The advisor points out the red flags immediately. You avoid the trap and learn how to vet real opportunities.",
                "xp": 300,
                "impact": {
                  "finance": 8
                },
                "trait": "+Finance"
              },
              {
                "id": "wait-and-watch-from-the-",
                "label": "Wait and watch from the sidelines",
                "mentor": "Patience is a virtue, yet observation of a lie is still time stolen. Why watch a fire when you can build a sturdy house elsewhere?",
                "consequence": "You don't lose money, but you spend months wondering 'what if' before the firm eventually disappears.",
                "xp": 110,
                "impact": {
                  "emotionalControl": 3
                },
                "trait": "+Stoicism"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "babylon-c5-s1-rf1",
            "prompt": "Think of a time you were tempted by a 'shortcut' to success. What was the internal voice that tried to convince you to ignore the risks?"
          },
          {
            "id": "babylon-c5-s1-rf2",
            "prompt": "If you lost 50% of your current savings tomorrow, how would your daily life and long-term goals change? How does this impact your view on 'safe' vs 'risky' growth?"
          }
        ]
      },
      {
        "id": "babylon-c5-s2",
        "title": "Consulting the Experts",
        "principle": "Invest only with those who are experienced in handling the specific type of asset you are targeting.",
        "scenarios": [
          {
            "id": "babylon-c5-s2-sc1",
            "title": "The Bakery Expansion",
            "setup": "Your close friend, a lifelong baker, asks you to invest your savings into his new venture: a high-speed cryptocurrency mining farm in his basement. He promises the returns will far exceed his bread sales, though he has never owned a digital wallet before.",
            "choices": [
              {
                "id": "politely-decline-and-off",
                "label": "Politely decline and offer a loan for a new industrial oven instead",
                "mentor": "A man who seeks advice on gems from a brickmaker is a fool. If thy friend knows flour, help him bake; do not trust him with the magic of unseen coins.",
                "consequence": "You preserve your capital and deepen your friendship by supporting his actual expertise.",
                "xp": 250,
                "impact": {
                  "finance": 7
                },
                "trait": "+Prudence"
              },
              {
                "id": "invest-a-small-portion-t",
                "label": "Invest a small portion to support his enthusiasm",
                "mentor": "The gold you part with out of kindness is still gold lost. Charity is noble, but risking thy principal for a novice's whim is a leaky vessel.",
                "consequence": "The hardware fails and your money vanishes, but your friend feels supported despite the failure.",
                "xp": 120,
                "impact": {
                  "emotionalControl": 2
                },
                "trait": "+Loyalty"
              },
              {
                "id": "go-all-in-on-the-hardwar",
                "label": "Go all in on the hardware to get early-mover advantage",
                "mentor": "The lure of quick riches has blinded many. You have handed your shield to a child and asked him to hold the front line in battle.",
                "consequence": "A technical glitch wipes the drive; you lose your savings and your friend stops taking your calls out of shame.",
                "xp": 50,
                "impact": {
                  "strategy": -5
                },
                "trait": "-Finance"
              }
            ]
          },
          {
            "id": "babylon-c5-s2-sc2",
            "title": "The Real Estate Syndicate",
            "setup": "A charismatic social media influencer invites you to join an 'exclusive' land development group. After digging, you find he made his money in fitness coaching, not property development, and he is hiring your uncle—a plumber—to lead the construction.",
            "choices": [
              {
                "id": "request-to-see-the-lead-",
                "label": "Request to see the lead developer's track record in land use",
                "mentor": "Before thou releasest thy gold, see if the one who handles it has proven he can keep his own alive. Ask for his scars and his victories.",
                "consequence": "You discover the project lacks permits, saving you from a massive legal forfeiture.",
                "xp": 280,
                "impact": {
                  "negotiation": 8
                },
                "trait": "+Skepticism"
              },
              {
                "id": "trust-the-influencer-s-b",
                "label": "Trust the influencer's brand and invest the minimum",
                "mentor": "A loud voice in the market square does not mean the merchant sells honest wool. You play with fire because the flame looks bright.",
                "consequence": "The project stalls for years; your money is locked away with zero liquidity or returns.",
                "xp": 100,
                "impact": {
                  "discipline": -1
                },
                "trait": "+Patience"
              },
              {
                "id": "commit-your-portfolio-ba",
                "label": "Commit your portfolio based on the beautiful 3D renders",
                "mentor": "Visions of gold are as mist on the river if the Hand that builds them is unskilled. You have traded your labor for a dream of painted air.",
                "consequence": "The company goes bankrupt within months; you realize the 'leads' had no experience in commercial law.",
                "xp": 45,
                "impact": {
                  "mindset": -6
                },
                "trait": "-CriticalThinking"
              }
            ]
          },
          {
            "id": "babylon-c5-s2-sc3",
            "title": "The Tech Guru's Tip",
            "setup": "Your cousin, an expert software engineer, tells you about an amazing biotech stock that is 'guaranteed' to triple. While he is a genius at coding, he admits he hasn't read the pharmaceutical clinical trial reports.",
            "choices": [
              {
                "id": "consult-a-dedicated-biot",
                "label": "Consult a dedicated biotech analyst before making any move",
                "mentor": "Seek gold from the goldsmith and wisdom of the stars from the astronomer. Do not ask the shepherd how to heal a king.",
                "consequence": "The analyst identifies a failed FDA trial; you avoid a 90% drop in stock price.",
                "xp": 260,
                "impact": {
                  "strategy": 6
                },
                "trait": "+Discipline"
              },
              {
                "id": "buy-a-small-amount-of-th",
                "label": "Buy a small amount of the stock out of FOMO",
                "mentor": "Thy fear of missing a feast has led thee to eat spoiled meat. A small loss is still a mark against thy discipline.",
                "consequence": "The stock drops moderately; you learn that genius in one field does not transfer to another.",
                "xp": 110,
                "impact": {
                  "stoicism": 1
                },
                "trait": "-Finance"
              },
              {
                "id": "move-your-emergency-fund",
                "label": "Move your emergency fund into the stock immediately",
                "mentor": "Thy wall of protection is torn down. To risk thy security on the word of a man who knows not the terrain is to invite the desert wind to take thy life.",
                "consequence": "The company collapses; you are left with no savings and a high-interest credit card bill to cover emergencies.",
                "xp": 40,
                "impact": {
                  "emotionalControl": -6
                },
                "trait": "-RiskManagement"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "babylon-c5-s2-rf1",
            "prompt": "Think of a time you took advice from someone who was successful in life, but had no actual experience in the specific topic they were advising you on. What was the outcome?"
          },
          {
            "id": "babylon-c5-s2-rf2",
            "prompt": "If you had to pick one 'expert' in your current circle to trust with your life savings, who would it be and what specific evidence of their expertise do you have?"
          }
        ]
      }
    ]
  },
  {
    "id": "babylon-c6",
    "title": "The Fifth Cure: Make of Thy Dwelling a Profitable Investment",
    "summary": "Owning your own home reduces the cost of living and provides a sense of pride and stability.",
    "sections": [
      {
        "id": "babylon-c6-s1",
        "title": "The Burden of Rent",
        "principle": "Transfer the money once paid to landlords into the equity of your own property.",
        "scenarios": [
          {
            "id": "babylon-c6-s1-sc1",
            "title": "The Landlord's Toll",
            "setup": "Your monthly rental payment has just increased despite no improvements to your cramped apartment. You realize that a decade of these payments has built nothing for your future, only for your landlord's legacy.",
            "choices": [
              {
                "id": "secure-a-modest-mortgage",
                "label": "Secure a modest mortgage for a small fixer-upper.",
                "mentor": "Thy gold now builds a wall for thy own protection, rather than filling the coffers of another. Each copper paid is a seed planted in thy own soil.",
                "consequence": "Initial hardship in repairs leads to zero rent payments in five years and substantial home equity.",
                "xp": 250,
                "impact": {
                  "finance": 8
                },
                "trait": "+Legacy"
              },
              {
                "id": "renew-the-lease-but-ask-",
                "label": "Renew the lease but ask for minor cosmetic upgrades.",
                "mentor": "Comfort is a fleeting vapor. Thou hast traded thy future independence for a fresh coat of paint that belongs to a stranger.",
                "consequence": "Short-term aesthetic satisfaction while your net worth remains stagnant as market rents continue to rise.",
                "xp": 120,
                "impact": {
                  "negotiation": 2
                },
                "trait": "+Comfort"
              },
              {
                "id": "ignore-the-cost-and-upgr",
                "label": "Ignore the cost and upgrade to a luxury rental downtown.",
                "mentor": "He who seeks to look like a king while paying tribute to a master is but a slave in fine robes. Thy gold flees from thee forever.",
                "consequence": "Increased lifestyle inflation traps you in a cycle of high-stress work just to keep a roof you will never own.",
                "xp": 45,
                "impact": {
                  "mindset": -5
                },
                "trait": "-Wealth"
              }
            ]
          },
          {
            "id": "babylon-c6-s1-sc2",
            "title": "The First Foundation",
            "setup": "You have saved a modest sum that could either fund a lavish vacation or serve as a down payment on a humble cottage. You feel the pull of immediate pleasure against the long-term burden of paying rent.",
            "choices": [
              {
                "id": "direct-every-coin-toward",
                "label": "Direct every coin toward the cottage down-payment.",
                "mentor": "The man who owns his own house hath a heart at peace. He can provide for his family with a lower cost and a higher pride.",
                "consequence": "Delayed gratification results in a life-long reduction in living expenses and a tangible asset.",
                "xp": 280,
                "impact": {
                  "discipline": 7
                },
                "trait": "+Discipline"
              },
              {
                "id": "split-the-funds-between-",
                "label": "Split the funds between a smaller trip and a savings account.",
                "mentor": "A divided mind builds a shaky house. By trying to please both the traveler and the dweller, thou delayest thy true freedom.",
                "consequence": "You remain in the rental market for three more years, losing thousands in potential equity.",
                "xp": 110,
                "impact": {
                  "strategy": 1
                },
                "trait": "+Balance"
              },
              {
                "id": "spend-the-savings-on-a-w",
                "label": "Spend the savings on a world tour to 'find yourself'.",
                "mentor": "Thou wilt find only a leaner purse upon thy return. A man without a home is like a bird that must fight the wind every night.",
                "consequence": "You return with memories but zero assets, forced to accept a predatory rental agreement.",
                "xp": 50,
                "impact": {
                  "emotionalControl": -4
                },
                "trait": "-Security"
              }
            ]
          },
          {
            "id": "babylon-c6-s1-sc3",
            "title": "The Garden of Stability",
            "setup": "A local property is for sale at a price where the mortgage would equal your current rent. However, it requires you to commit to one location for several years, challenging your desire for mobility.",
            "choices": [
              {
                "id": "purchase-the-property-an",
                "label": "Purchase the property and commit to the community.",
                "mentor": "To plant a tree is to believe in tomorrow. Let the coins thou once gave the tax-gatherer or landlord now nourish thy own garden.",
                "consequence": "Stable housing costs allow you to invest more aggressively in other ventures as your home value grows.",
                "xp": 260,
                "impact": {
                  "mindset": 6
                },
                "trait": "+Stability"
              },
              {
                "id": "wait-for-a-perfect-marke",
                "label": "Wait for a 'perfect' market crash that may never come.",
                "mentor": "He who watches the wind will never sow. While thou waitest for a sign from the gods, the landlord grows fat on thy labor.",
                "consequence": "Missed opportunity costs accumulate as property values rise faster than your savings interest.",
                "xp": 95,
                "impact": {
                  "strategy": -2
                },
                "trait": "-Decisiveness"
              },
              {
                "id": "sign-a-long-term-premium",
                "label": "Sign a long-term premium lease for 'flexibility'.",
                "mentor": "Flexibility is but a fancy word for having no roots. Thy silver disappears like water in the desert sands, leaving nothing behind.",
                "consequence": "Total loss of the 'transfer effect'—you pay for a home, but it is your landlord's children who benefit.",
                "xp": 40,
                "impact": {
                  "finance": -6
                },
                "trait": "-Finance"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "babylon-c6-s1-rf1",
            "prompt": "Look at your current living expenses; what percentage of your monthly effort is building someone else's equity instead of your own future?"
          },
          {
            "id": "babylon-c6-s1-rf2",
            "prompt": "If you never had to pay rent again, how would your daily choices and your sense of personal dignity change?"
          }
        ]
      },
      {
        "id": "babylon-c6-s2",
        "title": "The Family Foundation",
        "principle": "Ownership of a home provides a heart of confidence that makes a man more capable in his other endeavors.",
        "scenarios": [
          {
            "id": "babylon-c6-s2-sc1",
            "title": "The Rent Trap",
            "setup": "You have spent five years paying a landlord for a cramped apartment with leaking pipes he refuses to fix. A modest townhouse within your means has just hit the market, but the down payment will drain your liquid savings.",
            "choices": [
              {
                "id": "secure-the-mortgage-and-",
                "label": "Secure the mortgage and claim the dwelling.",
                "mentor": "Even the smallest patch of earth, if it be thine own, gives a man's heart a sturdiness that no merchant's purse can buy.",
                "consequence": "Immediate reduction in monthly overhead; increased confidence when negotiating at work.",
                "xp": 250,
                "impact": {
                  "mindset": 8
                },
                "trait": "+Stability"
              },
              {
                "id": "continue-renting-to-keep",
                "label": "Continue renting to keep your gold accessible.",
                "mentor": "Gold is a fickle companion if it has no home to rest in. Thou keepest thy coins, but thy soul remains a wanderer.",
                "consequence": "Financial flexibility remains high, but you feel a growing sense of restlessness and exhaustion.",
                "xp": 100,
                "impact": {
                  "finance": 2
                },
                "trait": "Neutral"
              },
              {
                "id": "wait-for-a-luxury-estate",
                "label": "Wait for a luxury estate you cannot yet afford.",
                "mentor": "He who waits for the golden palace while his children shiver in a rented tent is a fool who understands neither gold nor shelter.",
                "consequence": "Years of rent are wasted; your confidence wanes as your dream remains out of reach.",
                "xp": 45,
                "impact": {
                  "strategy": -4
                },
                "trait": "-Discipline"
              }
            ]
          },
          {
            "id": "babylon-c6-s2-sc2",
            "title": "The Garden of Pride",
            "setup": "Your new home needs significant repair, and your weekends are now consumed with labor instead of leisure. Your friends invite you on an expensive trip, mocking your 'fixer-upper' life.",
            "choices": [
              {
                "id": "decline-the-trip-to-fini",
                "label": "Decline the trip to finish the repairs yourself.",
                "mentor": "To eat the fruit of a tree thou hast planted provides a sweetness no traveler's wine can match.",
                "consequence": "Home value increases; you gain a deep, internal sense of capability and self-reliance.",
                "xp": 280,
                "impact": {
                  "confidence": 7
                },
                "trait": "+Discipline"
              },
              {
                "id": "hire-expensive-contracto",
                "label": "Hire expensive contractors to fix it while you travel.",
                "mentor": "Thou hast a roof, yet thou fleest from it. Mastery of one's home requires the labor of the hand, not just the coin.",
                "consequence": "The house is fixed, but you feel no personal connection to the space and your savings are depleted.",
                "xp": 120,
                "impact": {
                  "leadership": 1
                },
                "trait": "-Finance"
              },
              {
                "id": "ignore-the-repairs-and-j",
                "label": "Ignore the repairs and join the vacation.",
                "mentor": "A man who lets his own walls crumble to seek pleasure abroad invites the spirit of poverty to dine at his table.",
                "consequence": "Repair costs triple due to neglect; your home becomes a source of stress rather than strength.",
                "xp": 50,
                "impact": {
                  "discipline": -6
                },
                "trait": "-Responsibility"
              }
            ]
          },
          {
            "id": "babylon-c6-s2-sc3",
            "title": "The Family Fortress",
            "setup": "Economic rumors suggest a recession is coming. You are offered a high-risk job in a distant city, but it would mean selling your stable home and returning to high-cost corporate housing.",
            "choices": [
              {
                "id": "reject-the-risk-to-prote",
                "label": "Reject the risk to protect your family's stability.",
                "mentor": "In the storm, the man with a lighthouse stands firm, while the man on the raft is tossed by every wave of rumor.",
                "consequence": "Peace of mind allows you to excel in your current role; your family thrives in their familiar community.",
                "xp": 220,
                "impact": {
                  "emotionalControl": 6
                },
                "trait": "+Wisdom"
              },
              {
                "id": "sell-the-home-and-chase-",
                "label": "Sell the home and chase the higher salary.",
                "mentor": "Wealth is not merely the weight of thy purse, but the security of thy hearth. Do not trade a shield for a heavier sword.",
                "consequence": "Higher income is offset by massive rent; your family feels displaced and anxious.",
                "xp": 110,
                "impact": {
                  "strategy": 3
                },
                "trait": "+Ambition"
              },
              {
                "id": "take-the-job-but-leave-t",
                "label": "Take the job but leave the home empty and unmanaged.",
                "mentor": "To own a field and let the weeds claim it is to mock the gods of fortune. Thou art divided, and thus, thou art weak.",
                "consequence": "Property taxes and maintenance drain the new salary; you feel overwhelmed and ineffective in both cities.",
                "xp": 40,
                "impact": {
                  "finance": -5
                },
                "trait": "-Focus"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "babylon-c6-s2-rf1",
            "prompt": "How does your current living situation—whether owned, rented, or shared—affect your willingness to take risks in your career or creative life?"
          },
          {
            "id": "babylon-c6-s2-rf2",
            "prompt": "If you had a permanent 'hearth' that was entirely paid for, what project or dream would you finally have the confidence to pursue?"
          }
        ]
      }
    ]
  },
  {
    "id": "babylon-c7",
    "title": "The Sixth and Seventh Cures: Future Income and Ability to Earn",
    "summary": "Ensure long-term security by preparing for old age and constantly improving your professional skills.",
    "sections": [
      {
        "id": "babylon-c7-s1",
        "title": "The Provision for Age",
        "principle": "Provide in advance for the needs of thy growing age and the protection of thy family.",
        "scenarios": [
          {
            "id": "babylon-c7-s1-sc1",
            "title": "The Distant Shore",
            "setup": "You are currently earning a steady income, but the thought of your silver years feels like a distant fog. You have an extra sum of money this month that could either go toward a luxury vacation now or a long-dated annuity for your future.",
            "choices": [
              {
                "id": "purchase-the-high-yield-",
                "label": "Purchase the high-yield annuity for retirement.",
                "mentor": "As a man plants a sprout to enjoy shade in his old age, so thy gold must be planted to shelter thy later years.",
                "consequence": "You feel a deep peace of mind knowing your future self is cared for; your immediate liquid cash drops.",
                "xp": 250,
                "impact": {
                  "finance": 8
                },
                "trait": "+Foresight"
              },
              {
                "id": "book-the-luxury-getaway-",
                "label": "Book the luxury getaway to 'live in the moment'.",
                "mentor": "He who eats all his grain today shall have no seed for the planting season when his strength fails.",
                "consequence": "You gain brief social status, but the underlying anxiety about your aging parents and your own future intensifies.",
                "xp": 50,
                "impact": {
                  "mindset": -4
                },
                "trait": "-Discipline"
              },
              {
                "id": "split-the-sum-between-a-",
                "label": "Split the sum between a modest trip and a small savings bond.",
                "mentor": "It is well to enjoy the fruits of thy labor, but do not let the sweetness of the fruit blind thee to the coming winter.",
                "consequence": "You enjoy a small rest, but your retirement projections remain precariously thin.",
                "xp": 120,
                "impact": {
                  "strategy": 2
                },
                "trait": "+Balance"
              }
            ]
          },
          {
            "id": "babylon-c7-s1-sc2",
            "title": "The Breadwinner's Shield",
            "setup": "Your family depends entirely on your current ability to work. An insurance agent offers a plan that protects your family if you can no longer provide, but the monthly premiums require cutting back on your entertainment budget.",
            "choices": [
              {
                "id": "commit-to-the-comprehens",
                "label": "Commit to the comprehensive family protection plan.",
                "mentor": "A man's love is measured not in words, but in the walls he builds to keep the storm from his kin when he is gone.",
                "consequence": "Your family is secured against catastrophe; you spend less on hobbies but sleep soundly.",
                "xp": 280,
                "impact": {
                  "finance": 7
                },
                "trait": "+Responsibility"
              },
              {
                "id": "decline-the-insurance-to",
                "label": "Decline the insurance to maximize your current lifestyle.",
                "mentor": "To ignore the hazards of the road is not courage, but the folly of a man who values a trinket over his home.",
                "consequence": "You have more fun now, but a minor health scare sends your household into a panic about the future.",
                "xp": 40,
                "impact": {
                  "emotionalControl": -5
                },
                "trait": "-Providence"
              },
              {
                "id": "request-the-most-basic-l",
                "label": "Request the most basic, low-cost coverage possible.",
                "mentor": "A small umbrella is better than none, yet it leaves the shoulders wet when the rain falls heavy.",
                "consequence": "You save money monthly, but realize your family would still struggle significantly in a true crisis.",
                "xp": 100,
                "impact": {
                  "strategy": 1
                },
                "trait": "+Prudence"
              }
            ]
          },
          {
            "id": "babylon-c7-s1-sc3",
            "title": "The Aging Artisan",
            "setup": "You notice your industry is shifting toward new technologies that you haven't mastered yet. You can spend your weekends relaxing or enroll in a certification course that ensures your employability for the next decade.",
            "choices": [
              {
                "id": "dedicate-your-weekends-t",
                "label": "Dedicate your weekends to mastering the new technology.",
                "mentor": "The man who seeks to increase his earning power must first increase his wisdom. The more thou knowest, the more thou mayest earn.",
                "consequence": "You become indispensable at work and secure a promotion; your leisure time is temporarily lost.",
                "xp": 300,
                "impact": {
                  "mindset": 8
                },
                "trait": "+Diligent"
              },
              {
                "id": "rely-on-your-current-exp",
                "label": "Rely on your current experience and seniority to keep your job.",
                "mentor": "The river flows on, and the man who stands still in its path will eventually be swept away by the current of progress.",
                "consequence": "A younger, tech-savvy hire is brought in to lead your department, leaving your position vulnerable.",
                "xp": 60,
                "impact": {
                  "leadership": -6
                },
                "trait": "-Growth"
              },
              {
                "id": "outsource-the-new-tech-t",
                "label": "Outsource the new tech tasks to a junior assistant.",
                "mentor": "To lean upon another's staff is to walk with a limp. Thy own hand must hold the tool of thy trade.",
                "consequence": "You buy some time, but you lose respect from your peers and miss the chance to improve your own value.",
                "xp": 110,
                "impact": {
                  "finance": 2
                },
                "trait": "+Delegation"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "babylon-c7-s1-rf1",
            "prompt": "If you were unable to work starting tomorrow, how many months would your family be able to maintain their current life? What is one specific sacrifice you could make today to extend that time?"
          },
          {
            "id": "babylon-c7-s1-rf2",
            "prompt": "Looking at your current professional skills, which one will be obsolete in ten years, and what new 'wisdom' must you begin acquiring now to remain a person of high value?"
          }
        ]
      },
      {
        "id": "babylon-c7-s2",
        "title": "The Increase of Earning Power",
        "principle": "The more wisdom we know, the more we may earn, for a man who seeks to learn more will be rewarded more.",
        "scenarios": [
          {
            "id": "babylon-c7-s2-sc1",
            "title": "The Weaver's New Loom",
            "setup": "Your current role provides a steady income, but a new technology is emerging that everyone else in your workshop is mocking as a 'passing fad'. You feel your current methods becoming slower and more dated by the day.",
            "choices": [
              {
                "id": "dedicate-your-evenings-t",
                "label": "Dedicate your evenings to mastering the new technology.",
                "mentor": "The man who seeks to know more of his craft shall find his purse heavier, for his hand becomes more skillful than his neighbors'.",
                "consequence": "You sacrifice leisure now, but you become the most sought-after specialist in the city within a year.",
                "xp": 280,
                "impact": {
                  "mindset": 8
                },
                "trait": "+Initiative"
              },
              {
                "id": "stick-to-your-proven-met",
                "label": "Stick to your proven methods but work extra hours.",
                "mentor": "Hard work is a noble friend, but a dull tool will always tire the arm more than a sharp one.",
                "consequence": "You earn overtime pay today, but your health declines and your value remains stagnant.",
                "xp": 120,
                "impact": {
                  "discipline": 2
                },
                "trait": "+HardWork"
              },
              {
                "id": "ignore-the-change-and-co",
                "label": "Ignore the change and complain about the new standards.",
                "mentor": "To turn one's back on wisdom is to stand still while the gold flows to those who moved forward.",
                "consequence": "You are eventually replaced by a younger apprentice who embraced the new tools.",
                "xp": 45,
                "impact": {
                  "strategy": -5
                },
                "trait": "-Adaptability"
              }
            ]
          },
          {
            "id": "babylon-c7-s2-sc2",
            "title": "The Scribe's Negotiation",
            "setup": "A wealthy merchant offers you a complex contract to manage, but it requires a level of mathematics you haven't yet mastered. You must decide how to handle this gap in your earning power.",
            "choices": [
              {
                "id": "request-a-week-to-study-",
                "label": "Request a week to study the principles before signing.",
                "mentor": "Wisdom is the foundation upon which gold is built; to build without it is to let the sand swallow your house.",
                "consequence": "The merchant respects your integrity and pays a premium for your accurate, specialized knowledge.",
                "xp": 250,
                "impact": {
                  "negotiation": 7
                },
                "trait": "+Integrity"
              },
              {
                "id": "fake-your-way-through-th",
                "label": "Fake your way through the contract using basic math.",
                "mentor": "A man who deceives his craft deceives his own future; errors in the ledger lead to a light purse.",
                "consequence": "A costly mistake is found later, damaging your reputation and resulting in a heavy fine.",
                "xp": 50,
                "impact": {
                  "finance": -6
                },
                "trait": "-Deception"
              },
              {
                "id": "decline-the-work-and-sta",
                "label": "Decline the work and stay with simpler, low-pay tasks.",
                "mentor": "Comfort is a warm blanket, but it provides no shelter from the cold winds of poverty in old age.",
                "consequence": "You avoid risk, but you remain trapped in poverty while your peers grow wealthy.",
                "xp": 90,
                "impact": {
                  "confidence": -2
                },
                "trait": "+Safety"
              }
            ]
          },
          {
            "id": "babylon-c7-s2-sc3",
            "title": "The Master's Apprenticeship",
            "setup": "The most successful expert in your field offers a mentorship program, but it costs a significant portion of your savings. You are torn between keeping your gold or investing it in your own brain.",
            "choices": [
              {
                "id": "pay-for-the-mentorship-a",
                "label": "Pay for the mentorship and study with total focus.",
                "mentor": "Gold is easily spent, but the wisdom of a master is a fountain that pours gold into your lap forever.",
                "consequence": "You lose liquidity now but double your hourly earning rate within six months.",
                "xp": 300,
                "impact": {
                  "leadership": 8
                },
                "trait": "+GrowthMindset"
              },
              {
                "id": "spend-the-savings-on-a-l",
                "label": "Spend the savings on a luxury to reward your recent hard work.",
                "mentor": "Feeding the desires of today leaves the stomach of tomorrow empty and crying for bread.",
                "consequence": "The temporary joy fades, leaving you with zero savings and the same low skill level.",
                "xp": 40,
                "impact": {
                  "emotionalControl": -4
                },
                "trait": "-Discipline"
              },
              {
                "id": "try-to-teach-yourself-fr",
                "label": "Try to teach yourself from free, outdated scrolls.",
                "mentor": "The path to knowledge is long; do not wander in circles to save a few coins when a guide could lead you straight.",
                "consequence": "You make slow progress and pick up several bad habits that take years to unlearn.",
                "xp": 110,
                "impact": {
                  "strategy": 3
                },
                "trait": "+Frugality"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "babylon-c7-s2-rf1",
            "prompt": "Identify a specific skill you currently possess that, if improved by only 10%, would significantly increase your income. What is blocking you from sharpening that tool?"
          },
          {
            "id": "babylon-c7-s2-rf2",
            "prompt": "Reflecting on your last year, how much have you invested in 'improving your ability to earn' compared to how much you spent on temporary entertainment?"
          }
        ]
      }
    ]
  }
];
