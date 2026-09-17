import type { BookChapter } from "@/types";

export const thinkgrowChapters: BookChapter[] = [
  {
    "id": "thinkgrow-c1",
    "title": "The Power of Thought",
    "summary": "Everything begins with a mental impulse, for thoughts are physical things when mixed with purpose and persistence.",
    "sections": [
      {
        "id": "thinkgrow-c1-s1",
        "title": "Definiteness of Purpose",
        "principle": "Success comes to those who become success conscious and fix their minds on a single, clear goal.",
        "scenarios": [
          {
            "id": "thinkgrow-c1-s1-sc1",
            "title": "The Side-Hustle Carousel",
            "setup": "You are currently juggling a dropshipping store, a freelance coding gig, and a novel draft. Your energy is scattered across three different dashboards, and progress has stalled on all fronts.",
            "choices": [
              {
                "id": "pivot-entirely-to-the-co",
                "label": "Pivot entirely to the coding gig as your sole focus.",
                "mentor": "Finally! You've stopped leaking energy. One sharp spear pierces deeper than three blunt ones.",
                "consequence": "Project completion rates skyrocket and you become the go-to expert in your niche.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Momentum"
              },
              {
                "id": "keep-all-three-but-set-s",
                "label": "Keep all three but set strict daily time blocks.",
                "mentor": "You're just organizing your own mediocrity. Scheduling isn't the same as choosing to win.",
                "consequence": "You avoid burnout, but you remain a 'jack of all trades' with average results.",
                "xp": 120,
                "impact": {
                  "discipline": 2
                },
                "trait": "+Discipline"
              },
              {
                "id": "launch-a-fourth-project-",
                "label": "Launch a fourth project to find 'the one'.",
                "mentor": "You're chasing butterflies while your house is on fire. Stop looking for luck and start building leverage.",
                "consequence": "Chronic fatigue sets in and your existing clients lose faith in your reliability.",
                "xp": 45,
                "impact": {
                  "mindset": -5
                },
                "trait": "-Focus"
              }
            ]
          },
          {
            "id": "thinkgrow-c1-s1-sc2",
            "title": "The Promotion Pitch",
            "setup": "Your manager asks where you see yourself in two years during a performance review. You have ten seconds to define your trajectory before the conversation shifts to mundane tasks.",
            "choices": [
              {
                "id": "state-a-specific-title-a",
                "label": "State a specific title and the revenue goal you will hit.",
                "mentor": "Clear as a bell! That kind of certainty makes people either get behind you or get out of the way.",
                "consequence": "Management begins tailoring high-stakes opportunities to your stated path.",
                "xp": 290,
                "impact": {
                  "leadership": 7
                },
                "trait": "+Confidence"
              },
              {
                "id": "say-you-want-to-grow-and",
                "label": "Say you want to 'grow and take on more responsibility'.",
                "mentor": "Vague goals get vague results. You just gave them permission to ignore your ambitions.",
                "consequence": "You are assigned tedious administrative tasks that no one else wants to do.",
                "xp": 50,
                "impact": {
                  "communication": -4
                },
                "trait": "-Authority"
              },
              {
                "id": "ask-what-the-company-nee",
                "label": "Ask what the company needs most from you first.",
                "mentor": "Generous, but reactive. You're letting their needs dictate your personal map.",
                "consequence": "You become a valued utility player, but your personal brand remains ill-defined.",
                "xp": 100,
                "impact": {
                  "negotiation": 3
                },
                "trait": "+Reliability"
              }
            ]
          },
          {
            "id": "thinkgrow-c1-s1-sc3",
            "title": "The Windfall Dilemma",
            "setup": "A small investment unexpectedly pays out $5,000. Your peers are suggesting varied uses, but your long-term vision for a real estate empire is still in the 'dream' phase.",
            "choices": [
              {
                "id": "lock-it-into-a-high-yiel",
                "label": "Lock it into a high-yield down payment fund immediately.",
                "mentor": "That's how you feed the beast! You're turning a mental impulse into physical brick and mortar.",
                "consequence": "The psychological shift from 'dreamer' to 'investor' accelerates your savings habit.",
                "xp": 275,
                "impact": {
                  "finance": 8
                },
                "trait": "+WealthConscious"
              },
              {
                "id": "spend-half-on-a-success-",
                "label": "Spend half on a 'success outfit' and save the rest.",
                "mentor": "Looking the part is good, but being the part is better. Don't spend the harvest before it's grown.",
                "consequence": "You feel more confident socially, but your actual goal remains just as far away.",
                "xp": 110,
                "impact": {
                  "emotionalControl": 2
                },
                "trait": "+SelfImage"
              },
              {
                "id": "treat-your-friends-to-an",
                "label": "Treat your friends to an expensive celebratory dinner.",
                "mentor": "You're trading your future leverage for a few hours of applause. Total amateur move.",
                "consequence": "The money vanishes instantly, leaving you with zero progress toward your empire.",
                "xp": 40,
                "impact": {
                  "discipline": -6
                },
                "trait": "-Capital"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c1-s1-rf1",
            "prompt": "Identify one 'mental impulse' or idea you’ve had recently. If you were to obsess over it for the next six months, what is the single most concrete physical result it would produce?"
          },
          {
            "id": "thinkgrow-c1-s1-rf2",
            "prompt": "List the three current projects or goals that are diluting your focus. Which two are you willing to 'kill' today to ensure the third one succeeds?"
          }
        ]
      },
      {
        "id": "thinkgrow-c1-s2",
        "title": "The Three Feet from Gold Rule",
        "principle": "Most failures occur because people quit just before they are about to reach their breakthrough.",
        "scenarios": [
          {
            "id": "thinkgrow-c1-s2-sc1",
            "title": "The Abandoned Pilot",
            "setup": "After six months of grueling development, your app's beta launch has zero traction. The investor rejection emails are piling up, and your savings are nearly drained.",
            "choices": [
              {
                "id": "pivot-to-a-new-niche-usi",
                "label": "Pivot to a new niche using current data",
                "mentor": "That’s the spirit! You aren't hitting a wall; you're just finding where the door isn't. Keep the momentum moving toward the opening.",
                "consequence": "You discover a hidden user segment that loves your core tech; revenue begins to trickle in.",
                "xp": 280,
                "impact": {
                  "strategy": 7
                },
                "trait": "+Resilience"
              },
              {
                "id": "keep-everything-the-same",
                "label": "Keep everything the same and pray",
                "mentor": "Hope is not leverage, kid. If the gear is stuck, you don't just stare at it; you apply pressure elsewhere.",
                "consequence": "You burn another month of cash with no change in results, but your resolve remains intact.",
                "xp": 120,
                "impact": {
                  "mindset": 2
                },
                "trait": "+Persistence"
              },
              {
                "id": "shut-it-down-and-take-a-",
                "label": "Shut it down and take a corporate job",
                "mentor": "You're quitting while the gold is literally under your fingernails. Don't come crying to me when someone else digs it up next month.",
                "consequence": "A competitor launches a similar feature weeks later and hits #1 on the App Store.",
                "xp": 50,
                "impact": {
                  "confidence": -5
                },
                "trait": "-Drive"
              }
            ]
          },
          {
            "id": "thinkgrow-c1-s2-sc2",
            "title": "The Final Rep",
            "setup": "You are three years into a side hustle that still hasn't replaced your day job. Fatigue has set in, and your friends are pressuring you to 'just enjoy life' instead of grinding every weekend.",
            "choices": [
              {
                "id": "consult-an-expert-to-fin",
                "label": "Consult an expert to find the 'missing inch'",
                "mentor": "Smart move! If you can't see the gold, bring in someone with better sensors. Leverage their eyes to finish your race.",
                "consequence": "A mentor points out one small pricing tweak; your conversion rate triples overnight.",
                "xp": 290,
                "impact": {
                  "finance": 8
                },
                "trait": "+Resourcefulness"
              },
              {
                "id": "cut-your-hours-but-keep-",
                "label": "Cut your hours but keep the lights on",
                "mentor": "Half-energy gets half-results. You're slowing down right when you should be sprinting for the finish line.",
                "consequence": "Progress slows to a crawl, and the project becomes a source of guilt rather than growth.",
                "xp": 110,
                "impact": {
                  "discipline": -1
                },
                "trait": "-Momentum"
              },
              {
                "id": "liquidate-assets-and-wal",
                "label": "Liquidate assets and walk away",
                "mentor": "You're handing over your hard-earned progress to the next person for pennies. That’s a loser’s exit.",
                "consequence": "You feel immediate relief, but six months later you are haunted by the 'what if' of your potential.",
                "xp": 45,
                "impact": {
                  "stoicism": -6
                },
                "trait": "-Vision"
              }
            ]
          },
          {
            "id": "thinkgrow-c1-s2-sc3",
            "title": "The Content Plateau",
            "setup": "Your educational channel has been stuck at 900 subscribers for three months. You feel like you've said everything there is to say and your energy is flagging.",
            "choices": [
              {
                "id": "commit-to-10-more-high-e",
                "label": "Commit to 10 more high-effort uploads",
                "mentor": "Persistence is a physical force! Push through this flatline and the algorithm will have no choice but to break for you.",
                "consequence": "The eighth video goes viral, pushing you past 10,000 subscribers and unlocking monetization.",
                "xp": 275,
                "impact": {
                  "mindset": 7
                },
                "trait": "+Grit"
              },
              {
                "id": "re-post-old-content-to-s",
                "label": "Re-post old content to save energy",
                "mentor": "Treading water isn't swimming. You're maintaining, but you aren't gaining an inch of ground.",
                "consequence": "Your audience stays stable but bored; you lose the 'spark' that made the project fun.",
                "xp": 130,
                "impact": {
                  "communication": 3
                },
                "trait": "+Maintenance"
              },
              {
                "id": "delete-the-channel-to-st",
                "label": "Delete the channel to 'start fresh'",
                "mentor": "Building from zero again? You're addicted to the start because you're scared of the finish. Pathetic.",
                "consequence": "You lose your entire archive and SEO history; the new project stalls even faster than the last.",
                "xp": 60,
                "impact": {
                  "emotionalControl": -4
                },
                "trait": "-Strategy"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c1-s2-rf1",
            "prompt": "Think of a project you abandoned in the past—if you had pushed for just three more months with expert help, what might your life look like right now?"
          },
          {
            "id": "thinkgrow-c1-s2-rf2",
            "prompt": "What is the 'gold' you are currently digging for, and what specific evidence do you have that you are closer today than you were yesterday?"
          }
        ]
      }
    ]
  },
  {
    "id": "thinkgrow-c2",
    "title": "Burning Desire",
    "summary": "A mere wish for riches will not bring them, but a burning desire backed by a definite plan will.",
    "sections": [
      {
        "id": "thinkgrow-c2-s1",
        "title": "The Six Practical Steps",
        "principle": "Define the exact amount, what you will give in return, and the date of achievement.",
        "scenarios": [
          {
            "id": "thinkgrow-c2-s1-sc1",
            "title": "The Infinite Number Trap",
            "setup": "You are drafting your three-year vision board and find yourself writing 'financial freedom' as your primary objective. Vera taps the paper, demanding to know the exact dollar amount required to fuel your obsession.",
            "choices": [
              {
                "id": "state-exactly-142-500-by",
                "label": "State exactly $142,500 by December 31st.",
                "mentor": "That's how you talk to the universe! Specificity creates a target that your subconscious can actually hit.",
                "consequence": "You suddenly feel a sharp focus on daily targets; debt begins to shrink immediately.",
                "xp": 280,
                "impact": {
                  "mindset": 8
                },
                "trait": "+Clarity"
              },
              {
                "id": "say-as-much-as-possible-",
                "label": "Say 'as much as possible' to avoid limiting yourself.",
                "mentor": "Vague goals are for losers who want to stay comfortable. You can't hit a target you refuse to draw!",
                "consequence": "Your spending remains impulsive because your brain doesn't recognize a limit or a goal.",
                "xp": 45,
                "impact": {
                  "discipline": -4
                },
                "trait": "-Focus"
              },
              {
                "id": "set-a-round-comfortable-",
                "label": "Set a round, comfortable number like $50,000.",
                "mentor": "It's a start, but don't let safety disguise itself as a plan. Is that a desire or just a suggestion?",
                "consequence": "You lose momentum by the second month because the goal doesn't actually excite you.",
                "xp": 120,
                "impact": {
                  "finance": 2
                },
                "trait": "+Realism"
              }
            ]
          },
          {
            "id": "thinkgrow-c2-s1-sc2",
            "title": "The Price of Admission",
            "setup": "You've defined your payout, but now you must decide what of yourself you are willing to sacrifice. Your social life, your sleep, or your comfort are all on the chopping block.",
            "choices": [
              {
                "id": "commit-to-10-hours-of-sk",
                "label": "Commit to 10 hours of skill-building every weekend.",
                "mentor": "Movement requires friction! Giving up your leisure for leverage is the ultimate trade.",
                "consequence": "Your expertise skyrockets, making your income goal a logical inevitability rather than a dream.",
                "xp": 290,
                "impact": {
                  "discipline": 7
                },
                "trait": "+Sacrifice"
              },
              {
                "id": "promise-to-work-harder-d",
                "label": "Promise to 'work harder' during your regular shift.",
                "mentor": "Effort without change is just spinning wheels. What are you actually giving UP?",
                "consequence": "You burn out without seeing any new results, leading to resentment of your own goals.",
                "xp": 50,
                "impact": {
                  "strategy": -5
                },
                "trait": "-Strategy"
              },
              {
                "id": "delegate-minor-chores-to",
                "label": "Delegate minor chores to buy back 3 hours a week.",
                "mentor": "Optimization is cute, but big wins require blood and sweat. Push harder on the exchange.",
                "consequence": "You gain a little breathing room, but the radical transformation you need remains stalled.",
                "xp": 150,
                "impact": {
                  "leadership": 3
                },
                "trait": "+Efficiency"
              }
            ]
          },
          {
            "id": "thinkgrow-c2-s1-sc3",
            "title": "The Final Deadline",
            "setup": "A potential partner asks when your new venture will be profitable. You realize you haven't set a hard date because you're afraid of failing publicly.",
            "choices": [
              {
                "id": "announce-a-firm-launch-d",
                "label": "Announce a firm launch date 6 months from today.",
                "mentor": "Pressure creates diamonds! Now that the clock is ticking, watch how fast you move.",
                "consequence": "The urgency forces you to cut unnecessary features and ship your product on time.",
                "xp": 275,
                "impact": {
                  "confidence": 6
                },
                "trait": "+Courage"
              },
              {
                "id": "say-it-will-be-ready-whe",
                "label": "Say it will be ready 'when the market is right.'",
                "mentor": "That is cowardice dressed as wisdom. If there's no deadline, there's no desire.",
                "consequence": "You spend the next year perfecting things that don't matter while your competitors pass you.",
                "xp": 40,
                "impact": {
                  "emotionalControl": -6
                },
                "trait": "-Action"
              },
              {
                "id": "give-a-vague-seasonal-ra",
                "label": "Give a vague seasonal range like 'late Autumn.'",
                "mentor": "A range is just a way to hide from the calendar. Pick a day and own it!",
                "consequence": "You work inconsistently, rushing only when the end of the season approaches.",
                "xp": 110,
                "impact": {
                  "strategy": 1
                },
                "trait": "+Planning"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c2-s1-rf1",
            "prompt": "Look at your current bank balance. What is the specific, non-negotiable number it must reach one year from today for you to feel you've won?"
          },
          {
            "id": "thinkgrow-c2-s1-rf2",
            "prompt": "Every harvest requires a planting. What is the one specific habit or comfort you are terrified to give up, but know you must sacrifice for your goal?"
          }
        ]
      },
      {
        "id": "thinkgrow-c2-s2",
        "title": "Burning the Bridges",
        "principle": "Eliminate every possibility of retreat to ensure the mind remains focused solely on winning.",
        "scenarios": [
          {
            "id": "thinkgrow-c2-s2-sc1",
            "title": "The Side-Hustle Safety Net",
            "setup": "Your e-commerce business is finally breaking even, but your corporate job remains your primary source of income and security. Your boss offers you a long-term contract extension that would demand all your creative energy, effectively stalling your business growth.",
            "choices": [
              {
                "id": "decline-the-contract-and",
                "label": "Decline the contract and resign to go full-time.",
                "mentor": "That's how you do it! Stop treating your dream like a hobby if you want it to pay you like a career. Burn that bridge and start swimming!",
                "consequence": "Short-term financial stress triggers intense productivity; future business revenue triples due to hyper-focus.",
                "xp": 280,
                "impact": {
                  "mindset": 8
                },
                "trait": "+Momentum"
              },
              {
                "id": "accept-the-contract-whil",
                "label": "Accept the contract while trying to scale the business at night.",
                "mentor": "You're trying to walk in two directions at once. You'll end up mediocre at both because you're too afraid to commit.",
                "consequence": "Moderate income stability; business plateaus and you suffer from chronic burnout within months.",
                "xp": 120,
                "impact": {
                  "discipline": 2
                },
                "trait": "+Security"
              },
              {
                "id": "wait-for-the-perfect-mom",
                "label": "Wait for 'the perfect moment' to quit later this year.",
                "mentor": "The 'perfect moment' is a ghost story for people who are scared to win. You're just delaying the inevitable collapse of your ambition.",
                "consequence": "The corporate project consumes your time; the business fails due to neglect by the end of the quarter.",
                "xp": 50,
                "impact": {
                  "confidence": -4
                },
                "trait": "-Drive"
              }
            ]
          },
          {
            "id": "thinkgrow-c2-s2-sc2",
            "title": "The Final Exit Strategy",
            "setup": "You are pitching a high-stakes venture to a group of investors who ask what your 'Plan B' is if this fails. They are looking for a safety net, but you know that admitting there is one will dilute your resolve.",
            "choices": [
              {
                "id": "tell-them-there-is-no-pl",
                "label": "Tell them there is no Plan B; this is the only path.",
                "mentor": "Total leverage! When there’s no exit, your only choice is to win. That kind of obsession is magnetic to money.",
                "consequence": "Initial investor skepticism turns into deep trust in your grit; the team works twice as hard knowing there is no retreat.",
                "xp": 300,
                "impact": {
                  "leadership": 7
                },
                "trait": "+Conviction"
              },
              {
                "id": "describe-a-pivot-strateg",
                "label": "Describe a pivot strategy to protect their capital.",
                "mentor": "Safe, but sterile. You're already planning for the funeral before the baby is even born. Watch your intensity drop.",
                "consequence": "Investors feel 'safe' but offer a lower valuation; the project moves slowly due to lack of urgency.",
                "xp": 150,
                "impact": {
                  "strategy": 3
                },
                "trait": "+Prudence"
              },
              {
                "id": "offer-to-return-to-your-",
                "label": "Offer to return to your old career if things go south.",
                "mentor": "Disgusting. You've already quit in your mind. Why should anyone invest in a captain looking for the nearest lifeboat?",
                "consequence": "Funding is denied; you subconsciously stop trying the moment the first obstacle appears.",
                "xp": 40,
                "impact": {
                  "mindset": -6
                },
                "trait": "-Resilience"
              }
            ]
          },
          {
            "id": "thinkgrow-c2-s2-sc3",
            "title": "The Move to the Epicenter",
            "setup": "To dominate your industry, you need to be in a specific high-cost city. You have enough savings for three months of rent, after which you'll be broke if you haven't secured a major partnership.",
            "choices": [
              {
                "id": "sign-the-lease-and-move-",
                "label": "Sign the lease and move immediately.",
                "mentor": "Put yourself in a corner! Necessity is the fastest gear you've got. Move now and let the pressure turn you into a diamond.",
                "consequence": "Acute survival pressure forces high-level networking; you secure a life-changing deal in week ten.",
                "xp": 260,
                "impact": {
                  "confidence": 8
                },
                "trait": "+Risk-Taking"
              },
              {
                "id": "commute-from-your-hometo",
                "label": "Commute from your hometown to save money.",
                "mentor": "You're spending your energy on travel instead of leverage. You're physically there but mentally you're still in the suburbs.",
                "consequence": "You save money but miss out on the late-night organic networking that drives the industry's inner circle.",
                "xp": 100,
                "impact": {
                  "finance": 1
                },
                "trait": "-Efficiency"
              },
              {
                "id": "wait-until-you-have-a-ye",
                "label": "Wait until you have a year of expenses saved up.",
                "mentor": "That's not a plan, that's a stall tactic. By the time you save that much, the window of opportunity will be shut tight.",
                "consequence": "A competitor takes the market share while you are still 'preparing'; you remain stuck in your comfort zone.",
                "xp": 60,
                "impact": {
                  "strategy": -3
                },
                "trait": "-Momentum"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c2-s2-rf1",
            "prompt": "Identify one 'backup plan' in your life right now that is actually preventing you from giving 100% to your primary goal. What would happen if you discarded it today?"
          },
          {
            "id": "thinkgrow-c2-s2-rf2",
            "prompt": "Recall a time you were forced to succeed because you had no other choice. How did your energy and focus differ from when you have a safety net?"
          }
        ]
      }
    ]
  },
  {
    "id": "thinkgrow-c3",
    "title": "Faith and Autosuggestion",
    "summary": "Faith is the head chemist of the mind, allowing thoughts to be translated into their spiritual and physical equivalents.",
    "sections": [
      {
        "id": "thinkgrow-c3-s1",
        "title": "Visualizing the Outcome",
        "principle": "You must see and feel yourself already in possession of the money or goal you seek.",
        "scenarios": [
          {
            "id": "thinkgrow-c3-s1-sc1",
            "title": "The High-Stakes Pitch",
            "setup": "You are sitting in the lobby of a top-tier venture firm, waiting to pitch your startup. Your palms are sweating, and your mind is racing through every possible technical failure.",
            "choices": [
              {
                "id": "close-your-eyes-and-ment",
                "label": "Close your eyes and mentally rehearse the handshake and the 'Yes'.",
                "mentor": "That's it! If you can't see the deal closed in your mind, your body will leak doubt. Occupy the seat of a winner before you even stand up.",
                "consequence": "You walk in with total presence; the investors feel your conviction and offer an follow-up meeting.",
                "xp": 280,
                "impact": {
                  "mindset": 8
                },
                "trait": "+Confidence"
              },
              {
                "id": "obsessively-check-your-s",
                "label": "Obsessively check your slides for typos one last time.",
                "mentor": "You're rearranging deck chairs on a sinking ship of nerves. Precision matters, but energy moves the needle.",
                "consequence": "The slides are perfect, but your delivery is mechanical and lacks the heat of belief.",
                "xp": 120,
                "impact": {
                  "strategy": 2
                },
                "trait": "+Detail"
              },
              {
                "id": "scroll-through-social-me",
                "label": "Scroll through social media to distract yourself from the anxiety.",
                "mentor": "You're surrendering your momentum to garbage content. You just diluted your focus right when you needed a laser beam.",
                "consequence": "You enter the room scattered and reactive, stumbling over your opening hook.",
                "xp": 45,
                "impact": {
                  "emotionalControl": -5
                },
                "trait": "-Discipline"
              }
            ]
          },
          {
            "id": "thinkgrow-c3-s1-sc2",
            "title": "The First Million",
            "setup": "You have set a goal to hit a specific net worth by year-end, but your bank account is currently stagnant. You are writing your daily affirmations before starting work.",
            "choices": [
              {
                "id": "write-the-exact-number-a",
                "label": "Write the exact number and describe the feeling of the heavy keys to your new office.",
                "mentor": "Detail is the fuel of faith! You aren't wishing; you're placing an order with the universe that you expect to be delivered.",
                "consequence": "Your focus sharpens, leading you to spot a high-leverage partnership you previously overlooked.",
                "xp": 250,
                "impact": {
                  "finance": 7
                },
                "trait": "+Vision"
              },
              {
                "id": "write-i-want-to-be-rich-",
                "label": "Write 'I want to be rich' ten times quickly.",
                "mentor": "Vague desires get vague results. You're just hitting a tennis ball against a curtain. Get specific or get out.",
                "consequence": "You feel a temporary boost in mood, but it fades as soon as you face a real challenge.",
                "xp": 90,
                "impact": {
                  "mindset": 1
                },
                "trait": "+Effort"
              },
              {
                "id": "skip-the-writing-to-spen",
                "label": "Skip the writing to spend more time on 'busy work' emails.",
                "mentor": "Running fast in the wrong direction is just a sophisticated way to fail. You're ignoring the blueprints to lift a hammer.",
                "consequence": "You stay busy but feel increasingly burnt out and disconnected from your long-term wealth goals.",
                "xp": 50,
                "impact": {
                  "discipline": -4
                },
                "trait": "-Focus"
              }
            ]
          },
          {
            "id": "thinkgrow-c3-s1-sc3",
            "title": "The Skeptic's Mirror",
            "setup": "A cynical friend mocks your 'visualization' practice, calling it delusional magic. You feel the urge to defend yourself or hide your ritual.",
            "choices": [
              {
                "id": "double-down-on-your-sess",
                "label": "Double down on your session, feeling the success even more intensely.",
                "mentor": "Internal conviction must be louder than external noise. Leverage their doubt to harden your own resolve!",
                "consequence": "You develop an unbreakable mental fortress that protects your progress from social pressure.",
                "xp": 300,
                "impact": {
                  "stoicism": 8
                },
                "trait": "+Stoicism"
              },
              {
                "id": "explain-the-psychologica",
                "label": "Explain the psychological mechanics of autosuggestion to them politely.",
                "mentor": "Why waste breath? You're trying to win an argument when you should be winning the game. Results speak louder.",
                "consequence": "You spend an hour debating instead of doing, losing your morning peak-performance state.",
                "xp": 110,
                "impact": {
                  "communication": 3
                },
                "trait": "+Knowledge"
              },
              {
                "id": "apologize-and-stop-doing",
                "label": "Apologize and stop doing it when others are around.",
                "mentor": "You just let someone else's small reality shrink your big one. That's a leak you can't afford.",
                "consequence": "Your subconscious begins to associate your goals with shame, slowing your momentum to a crawl.",
                "xp": 40,
                "impact": {
                  "emotionalControl": -6
                },
                "trait": "-Confidence"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c3-s1-rf1",
            "prompt": "Recall a time you were certain you would fail and ultimately did. If you had consciously visualized a successful physical outcome every morning that week, how would your specific actions have changed?"
          },
          {
            "id": "thinkgrow-c3-s1-rf2",
            "prompt": "If you achieved your primary financial goal tomorrow, what is the very first physical sensation you would feel, and how can you trigger that exact feeling right now?"
          }
        ]
      },
      {
        "id": "thinkgrow-c3-s2",
        "title": "The Subconscious Command",
        "principle": "Repeatedly affirm your desires to your subconscious mind to influence the subconscious to act upon them.",
        "scenarios": [
          {
            "id": "thinkgrow-c3-s2-sc1",
            "title": "The Mirror Confrontation",
            "setup": "You are staring at your reflection before a career-defining pitch, feeling the cold weight of imposter syndrome sinking in. The room is silent, and your inner critic is screaming that you aren't ready for this level of success.",
            "choices": [
              {
                "id": "recite-your-written-chie",
                "label": "Recite your written 'Chief Aim' statement with emotional intensity.",
                "mentor": "That's it! If you don't bully your subconscious into submission, it will bully you. Command your biology to follow your vision!",
                "consequence": "Your voice stabilizes; the board members sense an unshakable authority in your delivery, leading to a follow-up meeting.",
                "xp": 250,
                "impact": {
                  "mindset": 8
                },
                "trait": "+Conviction"
              },
              {
                "id": "distract-yourself-by-end",
                "label": "Distract yourself by endlessly scrolling through industry news.",
                "mentor": "Information is not momentum. You're just hiding from the work of mental conditioning. Wake up!",
                "consequence": "You feel informed but spiritually hollow, delivering a competent but utterly forgettable presentation.",
                "xp": 100,
                "impact": {
                  "strategy": 2
                },
                "trait": "+Knowledge"
              },
              {
                "id": "acknowledge-that-you-mig",
                "label": "Acknowledge that you might fail and start lowering your expectations.",
                "mentor": "You're feeding the wrong beast! You just gave your subconscious a blueprint for disaster. Why are you sabotaging your own leverage?",
                "consequence": "Your body language wilts; investors pick up on your hesitation and decline the offer within ten minutes.",
                "xp": 45,
                "impact": {
                  "confidence": -5
                },
                "trait": "-Confidence"
              }
            ]
          },
          {
            "id": "thinkgrow-c3-s2-sc2",
            "title": "The Midnight Doubt",
            "setup": "It’s 2:00 AM, and you’re exhausted but can't sleep due to financial anxiety. Your brain is looping on every wrong turn you've taken this year, reinforcing a cycle of scarcity.",
            "choices": [
              {
                "id": "force-a-visualization-of",
                "label": "Force a visualization of your bank balance at your target goal until you drift off.",
                "mentor": "Beautiful. The subconscious is most fertile right before sleep. Plant the seeds of wealth, not the weeds of worry!",
                "consequence": "You wake up with a specific, creative solution for a new revenue stream you hadn't considered before.",
                "xp": 280,
                "impact": {
                  "mindset": 7
                },
                "trait": "+Vision"
              },
              {
                "id": "write-a-list-of-all-your",
                "label": "Write a list of all your debts to 'face reality' before sleeping.",
                "mentor": "Facing facts is fine, but obsessing over the hole you're in just digs it deeper. Use your brain for leverage, not inventory.",
                "consequence": "You remain stressed and have a restless night, waking up with a headache and zero new ideas.",
                "xp": 120,
                "impact": {
                  "finance": 3
                },
                "trait": "+Responsibility"
              },
              {
                "id": "vent-your-frustrations-t",
                "label": "Vent your frustrations to a friend who is also struggling.",
                "mentor": "A pity party has a guest list of losers. You're harmonizing with failure instead of commanding success!",
                "consequence": "You both spiral into a 'misery loves company' mindset, wasting hours of potential sleep and mental energy.",
                "xp": 50,
                "impact": {
                  "emotionalControl": -4
                },
                "trait": "-Momentum"
              }
            ]
          },
          {
            "id": "thinkgrow-c3-s2-sc3",
            "title": "The Script of Identity",
            "setup": "You notice your self-talk has become cynical, often saying 'I never get the breaks' or 'This always happens to me.' You realize these are becoming self-fulfilling prophecies.",
            "choices": [
              {
                "id": "create-a-success-script-",
                "label": "Create a 'Success Script' and read it aloud three times a day for a month.",
                "mentor": "Repetition is the mother of skill and the father of belief. Drill that new identity into your skull until it’s your only reality!",
                "consequence": "After two weeks, your default reactions to setbacks change from frustration to tactical curiosity.",
                "xp": 300,
                "impact": {
                  "discipline": 8
                },
                "trait": "+Persistence"
              },
              {
                "id": "simply-try-to-be-more-po",
                "label": "Simply try to 'be more positive' whenever you catch a negative thought.",
                "mentor": "Vague goals get vague results. Without a structured command, your subconscious will just ignore your polite requests.",
                "consequence": "You have a few good days, but the old habits return the moment you face a significant stressor.",
                "xp": 110,
                "impact": {
                  "mindset": 2
                },
                "trait": "+Awareness"
              },
              {
                "id": "accept-that-this-is-just",
                "label": "Accept that this is just your personality and try to work around it.",
                "mentor": "Static thinking is a death sentence. If you won't reprogram your machine, someone else will use it against you!",
                "consequence": "Your ceiling remains low; you pass up opportunities because you've convinced yourself they aren't 'for people like you.'",
                "xp": 40,
                "impact": {
                  "leadership": -6
                },
                "trait": "-Growth"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c3-s2-rf1",
            "prompt": "Look at your last 24 hours of internal dialogue. If your subconscious took every one of those thoughts as a direct order, what kind of life would you be building right now?"
          },
          {
            "id": "thinkgrow-c3-s2-rf2",
            "prompt": "What is the specific 'Chief Aim' or desire you are most afraid to affirm out loud, and what would happen if you began commanding your mind to achieve it every single morning?"
          }
        ]
      }
    ]
  },
  {
    "id": "thinkgrow-c4",
    "title": "Specialized Knowledge and Imagination",
    "summary": "Knowledge is only potential power; it becomes actual power when organized into definite plans of action.",
    "sections": [
      {
        "id": "thinkgrow-c4-s1",
        "title": "Practical Application",
        "principle": "True education is the ability to acquire what you want without violating the rights of others.",
        "scenarios": [
          {
            "id": "thinkgrow-c4-s1-sc1",
            "title": "The Industry Insight Strategy",
            "setup": "You are a freelance graphic designer noticing that high-end organic skincare brands lack cohesive visual branding. Instead of taking more art classes, you spend weeks studying their supply chain and regulatory hurdles to speak their exact language.",
            "choices": [
              {
                "id": "pitch-a-campaign-focused",
                "label": "Pitch a campaign focused on streamlining their market compliance through design.",
                "mentor": "That is how you stack leverage! You aren't selling pixels; you're selling a solution to their biggest headache.",
                "consequence": "You land a high-ticket retainer and become the go-to expert for skincare luxury startups.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Strategic Value"
              },
              {
                "id": "offer-a-standard-discoun",
                "label": "Offer a standard discount to undercut other generalist designers.",
                "mentor": "A race to the bottom is a one-way ticket to mediocrity. Stop selling your time for pennies like a commodity!",
                "consequence": "You attract high-maintenance, low-budget clients who drain your creativity and bank account.",
                "xp": 60,
                "impact": {
                  "finance": -4
                },
                "trait": "-Market Power"
              },
              {
                "id": "cold-call-brands-asking-",
                "label": "Cold-call brands asking what their biggest problems are without offering plans.",
                "mentor": "Research is good, but movement is better. Don't just collect data—organize it into a weapon.",
                "consequence": "You build a decent network, but potential clients view you as a consultant rather than a partner.",
                "xp": 140,
                "impact": {
                  "communication": 3
                },
                "trait": "+Networking"
              }
            ]
          },
          {
            "id": "thinkgrow-c4-s1-sc2",
            "title": "The Rival's Secret Sauce",
            "setup": "A direct competitor accidentally leaves a detailed vendor list and pricing sheet in a shared co-working printer. You could use this to undercut their every move and potentially force them out of the market.",
            "choices": [
              {
                "id": "shred-the-documents-and-",
                "label": "Shred the documents and focus on innovating your own unique delivery model.",
                "mentor": "Integrity provides the foundation for momentum! If you build on theft, your own house will eventually crumble.",
                "consequence": "You maintain your reputation and discover a proprietary niche that your rival cannot copy.",
                "xp": 250,
                "impact": {
                  "mindset": 7
                },
                "trait": "+Ethical Leadership"
              },
              {
                "id": "use-the-list-to-poach-th",
                "label": "Use the list to poach their top three suppliers by offering exclusive contracts.",
                "mentor": "You're playing small-ball. Violating rights for a quick gain creates enemies who will hunt you later.",
                "consequence": "Short-term savings are eclipsed by a legal dispute and a tarnished industry reputation.",
                "xp": 50,
                "impact": {
                  "negotiation": -5
                },
                "trait": "-Integrity"
              },
              {
                "id": "analyze-the-pricing-to-s",
                "label": "Analyze the pricing to see where your own overhead is bloated without copying the vendors.",
                "mentor": "Fair enough. Use the data for perspective, but don't lose your focus on your own game plan.",
                "consequence": "You tighten your operations significantly but remain slightly behind on personal innovation.",
                "xp": 120,
                "impact": {
                  "finance": 4
                },
                "trait": "+Operational Audit"
              }
            ]
          },
          {
            "id": "thinkgrow-c4-s1-sc3",
            "title": "The Promotion Vacuum",
            "setup": "Your department manager just quit, leaving a chaotic mess of unfinished projects and no leadership. You have the technical skills, but several senior members think they own the territory.",
            "choices": [
              {
                "id": "draft-a-90-day-stabiliza",
                "label": "Draft a 90-day stabilization plan and present it to the VP as a volunteer lead.",
                "mentor": "Boom! Stepping into the void with a plan is how leaders are born. Action beats seniority every time.",
                "consequence": "The VP is impressed by your initiative; you are promoted to interim manager with a significant raise.",
                "xp": 300,
                "impact": {
                  "leadership": 8
                },
                "trait": "+Initiative"
              },
              {
                "id": "wait-for-hr-to-post-the-",
                "label": "Wait for HR to post the job and apply through the official internal portal.",
                "mentor": "Passive! You're letting the system dictate your speed. Don't wait for permission to lead.",
                "consequence": "You are interviewed but lose the role to an outside hire who convinced them of a 'vision' you lacked.",
                "xp": 100,
                "impact": {
                  "confidence": 2
                },
                "trait": "-Agility"
              },
              {
                "id": "tell-the-senior-members-",
                "label": "Tell the senior members you'll do their work if they support your promotion.",
                "mentor": "You're bribing people for a seat at the table? That's not leverage, that's a hostage situation.",
                "consequence": "The senior staff exploits your labor, and leadership views you as a pushover, not a director.",
                "xp": 45,
                "impact": {
                  "emotionalControl": -6
                },
                "trait": "-Authority"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c4-s1-rf1",
            "prompt": "Identify a specific 'useless' fact or skill you possess; how could you organize it into a definite plan to solve someone else's problem this week?"
          },
          {
            "id": "thinkgrow-c4-s1-rf2",
            "prompt": "When has your desire for a shortcut tempted you to violate someone else's rights or peace of mind, and how did that impact your long-term momentum?"
          }
        ]
      },
      {
        "id": "thinkgrow-c4-s2",
        "title": "The Workshop of the Mind",
        "principle": "Use synthetic and creative imagination to combine old concepts into new ideas and plans.",
        "scenarios": [
          {
            "id": "thinkgrow-c4-s2-sc1",
            "title": "The Forgotten Prototype",
            "setup": "You find a box of high-end, discarded sensors from a failed drone startup and some old industrial camera lenses. Your garage is cluttered with 'junk' that could either be a fire hazard or the foundation of a new security system.",
            "choices": [
              {
                "id": "combine-the-tech-into-an",
                "label": "Combine the tech into an AI-driven home monitoring kit",
                "mentor": "That's it! Momentum loves a recycler. You aren't just playing with toys; you're organizing chaos into a marketable plan!",
                "consequence": "You build a working prototype that attracts a local tech investor's attention next month.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Innovation"
              },
              {
                "id": "sell-the-components-indi",
                "label": "Sell the components individually on an auction site",
                "mentor": "You're trading equity for lunch money. It’s quick cash, but you're ignoring the leverage of a bigger idea.",
                "consequence": "You make $400 immediately, but lose the opportunity to build a unique product.",
                "xp": 120,
                "impact": {
                  "finance": 2
                },
                "trait": "+Finance"
              },
              {
                "id": "wait-for-a-perfect-spark",
                "label": "Wait for a 'perfect' spark of inspiration before touching the parts",
                "mentor": "Analysis paralysis is a slow death. While you're waiting for a muse, the tech is becoming obsolete!",
                "consequence": "The hardware becomes outdated and worth nothing within six months.",
                "xp": 45,
                "impact": {
                  "mindset": -4
                },
                "trait": "-Momentum"
              }
            ]
          },
          {
            "id": "thinkgrow-c4-s2-sc2",
            "title": "The Stagnant Agency",
            "setup": "Your marketing firm is drowning in a saturated market of generic social media managers. You have deep knowledge of psychology and a hobbyist's obsession with local history.",
            "choices": [
              {
                "id": "pivot-to-legacy-branding",
                "label": "Pivot to 'Legacy Branding' using historical storytelling for old brands",
                "mentor": "Brilliant! You're taking two existing worlds and smashing them together to create a new category. Leverage that niche!",
                "consequence": "You land three high-value heritage brands that want your unique 'synthetic' approach.",
                "xp": 290,
                "impact": {
                  "leadership": 7
                },
                "trait": "+Strategy"
              },
              {
                "id": "lower-your-prices-to-bea",
                "label": "Lower your prices to beat the generic competition",
                "mentor": "A race to the bottom is a race you don't want to win. You're bleeding value because you won't think!",
                "consequence": "Profit margins vanish and you burn out from overwork by year's end.",
                "xp": 50,
                "impact": {
                  "mindset": -6
                },
                "trait": "-Finance"
              },
              {
                "id": "hire-an-expensive-consul",
                "label": "Hire an expensive consultant to tell you what to do",
                "mentor": "You're outsourcing your imagination. A consultant might give you a plan, but they won't give you the fire.",
                "consequence": "You get a standard corporate roadmap that provides moderate, safe growth but no breakthrough.",
                "xp": 150,
                "impact": {
                  "strategy": 3
                },
                "trait": "-Autonomy"
              }
            ]
          },
          {
            "id": "thinkgrow-c4-s2-sc3",
            "title": "The Logistics Bottleneck",
            "setup": "Your small furniture business is losing money on shipping. You notice that local food delivery drivers are often idle during your peak delivery hours.",
            "choices": [
              {
                "id": "partner-with-those-drive",
                "label": "Partner with those drivers to create a dead-heading delivery network",
                "mentor": "That’s the workshop of the mind in action! You’re solving a logistics nightmare by repurposing existing labor. Go!",
                "consequence": "Shipping costs drop 40% and you gain a reputation for lightning-fast localized delivery.",
                "xp": 275,
                "impact": {
                  "negotiation": 7
                },
                "trait": "+Efficiency"
              },
              {
                "id": "apply-for-a-massive-bank",
                "label": "Apply for a massive bank loan to buy your own fleet of trucks",
                "mentor": "It's a plan, sure, but it's heavy and slow. You're adding debt instead of using creative leverage.",
                "consequence": "You solve the delivery issue but become a slave to monthly high-interest loan payments.",
                "xp": 140,
                "impact": {
                  "finance": 2
                },
                "trait": "-Finance"
              },
              {
                "id": "complain-to-customers-ab",
                "label": "Complain to customers about why shipping is so expensive",
                "mentor": "Excuses are the language of the stagnant. If you can't imagine a way out, you're just taking up space!",
                "consequence": "Customer reviews plummet and your brand becomes synonymous with poor service.",
                "xp": 40,
                "impact": {
                  "communication": -5
                },
                "trait": "-Confidence"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c4-s2-rf1",
            "prompt": "Look at two skills or hobbies you have that seem completely unrelated. How could you combine them this week to solve a problem in your career?"
          },
          {
            "id": "thinkgrow-c4-s2-rf2",
            "prompt": "What is one piece of 'specialized knowledge' you possess that is currently sitting idle? What specific, written plan will you create to move it from potential to actual power?"
          }
        ]
      }
    ]
  },
  {
    "id": "thinkgrow-c5",
    "title": "Decision and Persistence",
    "summary": "Procrastination and lack of persistence are the two most common causes of failure in any endeavor.",
    "sections": [
      {
        "id": "thinkgrow-c5-s1",
        "title": "Decisiveness",
        "principle": "Successful people reach decisions promptly and change them very slowly, if at all.",
        "scenarios": [
          {
            "id": "thinkgrow-c5-s1-sc1",
            "title": "The Pilot Program",
            "setup": "Your tech startup has three potential markets, and your team is paralyzed by 'what-if' scenarios. Every day you wait, your seed capital drains into rent and overhead without a single user.",
            "choices": [
              {
                "id": "pick-the-most-viable-mar",
                "label": "Pick the most viable market and ship tonight.",
                "mentor": "That's it! Velocity is your best friend. Analysis is just a fancy word for hiding from the market.",
                "consequence": "You secure 50 early adopters and clear data, while competitors are still in meetings.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Momentum"
              },
              {
                "id": "commission-a-30-day-deep",
                "label": "Commission a 30-day deep-dive research report.",
                "mentor": "You're paying for a map while the terrain is changing under your feet. Stop stalling and move!",
                "consequence": "A rival launches a similar tool while you're reading page 40 of your useless report.",
                "xp": 50,
                "impact": {
                  "strategy": -5
                },
                "trait": "-Decisiveness"
              },
              {
                "id": "let-the-team-vote-anonym",
                "label": "Let the team vote anonymously on which direction to take.",
                "mentor": "Consensus is a slow death. You're the leader; stop asking for permission to be right.",
                "consequence": "The team feels included, but the lukewarm compromise satisfies no one and slows progress.",
                "xp": 140,
                "impact": {
                  "leadership": 2
                },
                "trait": "+Collaboration"
              }
            ]
          },
          {
            "id": "thinkgrow-c5-s1-sc2",
            "title": "The Investment Opportunity",
            "setup": "A rare real estate opportunity hits your desk with a 48-hour window. The numbers look solid, but your spouse expresses a vague, non-specific anxiety about the timing.",
            "choices": [
              {
                "id": "execute-the-wire-transfe",
                "label": "Execute the wire transfer immediately.",
                "mentor": "Fortune loves the bold! You saw the value, and you didn't let a mood swing rob you of the bag.",
                "consequence": "You lock in the equity before the bidding war starts, establishing your financial floor.",
                "xp": 250,
                "impact": {
                  "finance": 7
                },
                "trait": "+Wealth Management"
              },
              {
                "id": "wait-until-the-last-hour",
                "label": "Wait until the last hour to see if you feel 'safer'.",
                "mentor": "Feelings aren't facts, kid. While you were waiting for a 'vibe', the seller moved on to a serious buyer.",
                "consequence": "The deal closes with a competitor; you remain stagnant while your cash loses value to inflation.",
                "xp": 45,
                "impact": {
                  "emotionalControl": -4
                },
                "trait": "-Finance"
              },
              {
                "id": "offer-a-lower-price-to-h",
                "label": "Offer a lower price to hedge your risk.",
                "mentor": "Weak moves yield weak results. If the value is there, take it. Don't haggle yourself out of a win.",
                "consequence": "The seller is insulted and ignores your future calls, but you kept your capital safe for now.",
                "xp": 110,
                "impact": {
                  "negotiation": -1
                },
                "trait": "-Aggression"
              }
            ]
          },
          {
            "id": "thinkgrow-c5-s1-sc3",
            "title": "The Career Pivot",
            "setup": "You’ve spent three years planning a career change, but a safe promotion offer just arrived at your current job. Everyone expects you to stay, but your gut says leap.",
            "choices": [
              {
                "id": "decline-the-promotion-an",
                "label": "Decline the promotion and hand in your notice.",
                "mentor": "Clean break! You aren't distracted by golden handcuffs anymore. Now, run!",
                "consequence": "The immediate pressure to succeed ignites a level of productivity you've never felt before.",
                "xp": 300,
                "impact": {
                  "mindset": 8
                },
                "trait": "+Boldness"
              },
              {
                "id": "accept-the-promotion-but",
                "label": "Accept the promotion but keep 'planning' the pivot.",
                "mentor": "You're lying to yourself. You just traded your future for a 10% raise and some comfort.",
                "consequence": "Five years later, you're the most senior person in a department you hate, still 'planning'.",
                "xp": 60,
                "impact": {
                  "discipline": -6
                },
                "trait": "-Ambition"
              },
              {
                "id": "ask-for-a-sabbatical-to-",
                "label": "Ask for a sabbatical to 'test' the new career path.",
                "mentor": "One foot in, one foot out. You'll never get the momentum you need with a safety net this thick.",
                "consequence": "You make minor progress, but the lack of urgency keeps you from truly committing to excellence.",
                "xp": 150,
                "impact": {
                  "confidence": 1
                },
                "trait": "+Prudence"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c5-s1-rf1",
            "prompt": "Identify a decision you have been postponing for more than a month; what specific fear is masquerading as a 'need for more information'?"
          },
          {
            "id": "thinkgrow-c5-s1-rf2",
            "prompt": "Recall a time you changed your mind quickly due to someone else's opinion—how did that affect the ultimate outcome of your project?"
          }
        ]
      },
      {
        "id": "thinkgrow-c5-s2",
        "title": "The Sustained Effort",
        "principle": "The power of will is the backbone of persistence, necessary to overcome the inertia of failure.",
        "scenarios": [
          {
            "id": "thinkgrow-c5-s2-sc1",
            "title": "The Ghosting Season",
            "setup": "Your startup’s lead investor hasn't returned your texts in two weeks and your runway is evaporating. Every cell in your body wants to stop checking the inbox and pivot to a 'safer' career path.",
            "choices": [
              {
                "id": "send-a-bold-follow-up-wi",
                "label": "Send a bold follow-up with a 24-hour ultimatum",
                "mentor": "You're moving, but you're frantic. Leverage requires a cool head, not a desperate gamble.",
                "consequence": "The investor calls back but feels pressured; the relationship is now strained and defensive.",
                "xp": 120,
                "impact": {
                  "negotiation": 2
                },
                "trait": "+Momentum"
              },
              {
                "id": "schedule-five-new-pitche",
                "label": "Schedule five new pitches while waiting for the reply",
                "mentor": "That’s the fire! Never let one person's silence kill your momentum. You create the gravity here.",
                "consequence": "You land two new meetings, reducing your reliance on the ghosting investor and shifting power back to you.",
                "xp": 280,
                "impact": {
                  "mindset": 7
                },
                "trait": "+Discipline"
              },
              {
                "id": "close-the-laptop-and-tak",
                "label": "Close the laptop and take a 'mental health' week",
                "mentor": "Vulnerability isn't an excuse for inertia. If you stop now, the engine goes cold and stays cold.",
                "consequence": "The investor finally replies, but your lack of activity makes the project look dead. Funding is revoked.",
                "xp": 50,
                "impact": {
                  "confidence": -5
                },
                "trait": "-Persistence"
              }
            ]
          },
          {
            "id": "thinkgrow-c5-s2-sc2",
            "title": "The Weight of the 'No'",
            "setup": "After three months of relentless cold-calling for your freelance business, you haven't closed a single contract. Your bank account is screaming, and your friends are subtly suggesting you 'get a real job.'",
            "choices": [
              {
                "id": "double-your-daily-call-v",
                "label": "Double your daily call volume immediately",
                "mentor": "Brute force works when it's backed by will. You're refusing to accept the 'no' as a final state!",
                "consequence": "The law of averages kicks in; you land a mid-sized contract by Friday through sheer volume.",
                "xp": 300,
                "impact": {
                  "discipline": 8
                },
                "trait": "+Willpower"
              },
              {
                "id": "update-your-resume-for-c",
                "label": "Update your resume for corporate roles 'just in case'",
                "mentor": "You're building an exit ramp from your own dreams. Once you plan for failure, it's already arrived.",
                "consequence": "Your focus splits; your calls become half-hearted and your closing rate drops to zero.",
                "xp": 40,
                "impact": {
                  "strategy": -4
                },
                "trait": "-Focus"
              },
              {
                "id": "review-your-pitch-deck-f",
                "label": "Review your pitch deck for technical flaws",
                "mentor": "Don't hide behind 'perfecting the tool' when the problem is your lack of aggressive execution.",
                "consequence": "The deck looks better, but you still haven't asked for the money. Time is still wasting.",
                "xp": 150,
                "impact": {
                  "communication": 3
                },
                "trait": "+Analysis"
              }
            ]
          },
          {
            "id": "thinkgrow-c5-s2-sc3",
            "title": "The Plateau",
            "setup": "Your fitness and finance goals hit a flat line; despite doing everything right, you haven't seen growth in six weeks. The boredom of the routine is becoming more painful than the work itself.",
            "choices": [
              {
                "id": "stick-to-the-exact-routi",
                "label": "Stick to the exact routine without deviation",
                "mentor": "Persistence is boring, and that's why it's a superpower. You're outlasting the boredom that kills others.",
                "consequence": "The plateau breaks suddenly in week eight, leading to a massive spike in results.",
                "xp": 260,
                "impact": {
                  "stoicism": 6
                },
                "trait": "+Fortitude"
              },
              {
                "id": "change-every-variable-to",
                "label": "Change every variable to find a 'shortcut'",
                "mentor": "You're chasing novelty, not results. Complexity is the enemy of sustained momentum.",
                "consequence": "You lose track of what was working, feel overwhelmed, and quit the program entirely.",
                "xp": 60,
                "impact": {
                  "mindset": -4
                },
                "trait": "-Stability"
              },
              {
                "id": "hire-a-high-performance-",
                "label": "Hire a high-performance coach to audit you",
                "mentor": "Getting help is smart, but don't let a coach become a crutch for your own lack of will.",
                "consequence": "You get good advice but spend significant capital, increasing the pressure to perform immediately.",
                "xp": 180,
                "impact": {
                  "leadership": 4
                },
                "trait": "+Resourcefulness"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c5-s2-rf1",
            "prompt": "Identify a project you abandoned in the last year because progress felt too slow—what would your life look like right now if you had simply refused to stop?"
          },
          {
            "id": "thinkgrow-c5-s2-rf2",
            "prompt": "When you feel the urge to procrastinate, is it because the task is hard, or because you haven't decided that failure is not an option?"
          }
        ]
      }
    ]
  },
  {
    "id": "thinkgrow-c6",
    "title": "The Master Mind Group",
    "summary": "No individual has sufficient experience, education, and native ability to ensure great success without the cooperation of others.",
    "sections": [
      {
        "id": "thinkgrow-c6-s1",
        "title": "Economic Harmony",
        "principle": "Surround yourself with a group of people who share your vision and provide advice and sympathy.",
        "scenarios": [
          {
            "id": "thinkgrow-c6-s1-sc1",
            "title": "The Isolated Innovator",
            "setup": "Your solo venture is growing, but you're hitting technical bottlenecks you don't understand. A former rival and a seasoned consultant both reach out suggesting a weekly 'strategy dinner' to pool resources.",
            "choices": [
              {
                "id": "formalize-a-master-mind-",
                "label": "Formalize a Master Mind group with specific goals and diverse talents.",
                "mentor": "That's it! Stop trying to be the smartest person in the room and start building an engine that runs on collective brainpower.",
                "consequence": "You overcome technical hurdles and land a major contract through your partner's network.",
                "xp": 280,
                "impact": {
                  "leadership": 8
                },
                "trait": "+Strategic-Network"
              },
              {
                "id": "keep-it-casual-and-share",
                "label": "Keep it casual and share ideas only when you feel stuck.",
                "mentor": "Casual is for amateurs. If there’s no commitment to harmony and frequency, you’re just grabbing coffee, not building an empire.",
                "consequence": "Vague advice helps slightly, but the group loses interest and fades within three months.",
                "xp": 120,
                "impact": {
                  "communication": 2
                },
                "trait": "Mediocrity"
              },
              {
                "id": "decline-to-stay-focused-",
                "label": "Decline to stay focused on your own proprietary methods.",
                "mentor": "You're suffocating your potential with that ego. One brain is a lonely, limited island; you're sinking by choice!",
                "consequence": "Burnout hits as your competitors leapfrog your tech using collaborative research.",
                "xp": 45,
                "impact": {
                  "mindset": -5
                },
                "trait": "-Momentum"
              }
            ]
          },
          {
            "id": "thinkgrow-c6-s1-sc2",
            "title": "The Internal Mutiny",
            "setup": "One member of your inner circle has become consistently pessimistic, questioning the vision and dampening the group's energy. Economic harmony is being replaced by subtle friction.",
            "choices": [
              {
                "id": "have-a-direct-confrontat",
                "label": "Have a direct confrontation and remove them from the circle immediately.",
                "mentor": "Speed is life! One weak link drags the whole chain into the dirt. Cut the dead weight before the rot spreads.",
                "consequence": "The group's morale rebounds instantly and focus returns to high-level execution.",
                "xp": 250,
                "impact": {
                  "emotionalControl": 7
                },
                "trait": "+Momentum"
              },
              {
                "id": "downplay-the-tension-and",
                "label": "Downplay the tension and hope the member aligns as things improve.",
                "mentor": "You're letting a leak sink the ship. Hope isn't a strategy; it's a slow-motion disaster!",
                "consequence": "The group's best performer exits, frustrated by the toxic atmosphere and lack of leadership.",
                "xp": 50,
                "impact": {
                  "leadership": -6
                },
                "trait": "-Culture"
              },
              {
                "id": "call-a-full-group-meetin",
                "label": "Call a full group meeting to realign everyone to the central vision.",
                "mentor": "Rallying the troops works, but if the energy is fundamentally mismatched, you're just delaying the inevitable exit.",
                "consequence": "Productivity improves temporarily, but underlying resentment remains a distraction.",
                "xp": 140,
                "impact": {
                  "communication": 3
                },
                "trait": "+Diplomacy"
              }
            ]
          },
          {
            "id": "thinkgrow-c6-s1-sc3",
            "title": "The Advisor's Fee",
            "setup": "An industry titan offers to join your advisory board but demands a significant equity stake and a heavy influence on your next moves. You must decide if their 'sympathy and advice' is worth the price.",
            "choices": [
              {
                "id": "negotiate-a-performance-",
                "label": "Negotiate a performance-based equity deal to ensure their skin is in the game.",
                "mentor": "Leverage! You're trading a piece of the pie for a seat on a rocket ship. Make sure they work for it!",
                "consequence": "The titan opens doors to global investors that would have taken you ten years to reach.",
                "xp": 290,
                "impact": {
                  "negotiation": 8
                },
                "trait": "+High-Net-Worth"
              },
              {
                "id": "give-them-whatever-they-",
                "label": "Give them whatever they want to secure the prestige of their name.",
                "mentor": "Don't give away the farm just for a shiny badge. Prestige doesn't pay the bills; results do.",
                "consequence": "You lose significant control over your company for advice that is often out-of-touch.",
                "xp": 130,
                "impact": {
                  "finance": 1
                },
                "trait": "-Autonomy"
              },
              {
                "id": "reject-the-help-to-maint",
                "label": "Reject the help to maintain 100% of your current small-scale success.",
                "mentor": "100% of zero is still zero. You're choosing a bicycle over a jet engine because you're afraid to share the cockpit.",
                "consequence": "Your growth plateaus while a competitor partners with the titan and dominates the market.",
                "xp": 60,
                "impact": {
                  "strategy": -4
                },
                "trait": "-Vision"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c6-s1-rf1",
            "prompt": "Look at the five people you spend the most time with; which one consistently pushes you toward your vision, and which one provides 'friction' instead of 'harmony'?"
          },
          {
            "id": "thinkgrow-c6-s1-rf2",
            "prompt": "What specific area of your life or business is currently failing because you are stubbornly trying to solve it entirely on your own?"
          }
        ]
      },
      {
        "id": "thinkgrow-c6-s2",
        "title": "The Third Mind",
        "principle": "When two or more minds coordinate in harmony, they create a third, invisible, intangible force.",
        "scenarios": [
          {
            "id": "thinkgrow-c6-s2-sc1",
            "title": "The Stalled Prototype",
            "setup": "Your software startup is hemorrhaging cash because the user interface is clunky, and your coding partner is defensive about their work. You realize your solo genius hasn't been enough to solve the friction point.",
            "choices": [
              {
                "id": "call-an-emergency-brains",
                "label": "Call an emergency brainstorming session with an outside designer.",
                "mentor": "That's how you ignite it! Bringing in fresh blood forces two minds to fuse into a solutions-engine that solves the problem twice as fast.",
                "consequence": "The designer's perspective unlocks a third way of thinking; the app goes viral and you secure a seed round.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Momentum"
              },
              {
                "id": "spend-the-weekend-rewrit",
                "label": "Spend the weekend rewriting the code yourself.",
                "mentor": "Stop playing small! You're treating your energy like a finite battery instead of an electromagnetic field. This is a recipe for burnout.",
                "consequence": "You fix minor bugs but miss the fundamental design flaw; your competitor launches a superior version while you sleep.",
                "xp": 50,
                "impact": {
                  "leadership": -4
                },
                "trait": "-Focus"
              },
              {
                "id": "ask-your-partner-to-take",
                "label": "Ask your partner to take a lead role in the redesign while you watch.",
                "mentor": "Giving them space is polite, but it's not a Master Mind. You're just taking turns being stuck.",
                "consequence": "Moral improves slightly, but the product remains mediocre because no new energy was introduced to the system.",
                "xp": 120,
                "impact": {
                  "mindset": 2
                },
                "trait": "+Harmony"
              }
            ]
          },
          {
            "id": "thinkgrow-c6-s2-sc2",
            "title": "The High-Stakes Tender",
            "setup": "You are bidding for a massive municipal contract, but your technical expertise is narrow. A former rival offers to combine forces to beat the industry giant.",
            "choices": [
              {
                "id": "form-a-temporary-allianc",
                "label": "Form a temporary alliance and merge your project plans.",
                "mentor": "Leverage, baby! You're creating a 'Third Mind' that the giant can't possibly out-think because you're more agile and coordinated.",
                "consequence": "The combined bid is so comprehensive it becomes the new gold standard; you win the contract and split the massive profits.",
                "xp": 250,
                "impact": {
                  "negotiation": 7
                },
                "trait": "+Influence"
              },
              {
                "id": "decline-the-offer-to-pro",
                "label": "Decline the offer to protect your intellectual property.",
                "mentor": "You're hugging a single spark while the house is freezing. Ideas are worth nothing without the power to manifest them!",
                "consequence": "You submit a perfect but incomplete bid; the giant wins by default and you face a lean year.",
                "xp": 45,
                "impact": {
                  "confidence": -5
                },
                "trait": "-Vision"
              },
              {
                "id": "hire-the-rival-as-a-cons",
                "label": "Hire the rival as a consultant instead of a partner.",
                "mentor": "A consultant works for you, but a Master Mind works WITH you. You're missing the psychological synergy of shared skin in the game.",
                "consequence": "The rival gives you decent advice but holds back their best secrets; the bid is strong but ultimate success is uncertain.",
                "xp": 150,
                "impact": {
                  "finance": 3
                },
                "trait": "+Caution"
              }
            ]
          },
          {
            "id": "thinkgrow-c6-s2-sc3",
            "title": "The Master Mind Selection",
            "setup": "You want to scale your real estate portfolio quickly. You need to recruit two people for a weekly strategy meeting to push your limits.",
            "choices": [
              {
                "id": "invite-a-veteran-investo",
                "label": "Invite a veteran investor and a high-energy tech disruptor.",
                "mentor": "Now we're talking! Friction generates heat, and heat generates power. That mix will force you to see opportunities you're currently blind to.",
                "consequence": "The group discovers an untapped niche in short-term rentals; your net worth triples in eighteen months.",
                "xp": 300,
                "impact": {
                  "mindset": 8
                },
                "trait": "+Synergy"
              },
              {
                "id": "invite-two-of-your-close",
                "label": "Invite two of your closest friends who always support your ideas.",
                "mentor": "That's an echo chamber, not a Master Mind! If everyone agrees, there's only one mind in the room—and it's yours.",
                "consequence": "You feel great every week but your bank account stays stagnant because no one challenges your mistakes.",
                "xp": 40,
                "impact": {
                  "emotionalControl": -6
                },
                "trait": "-Growth"
              },
              {
                "id": "invite-two-people-signif",
                "label": "Invite two people significantly wealthier than you and just listen.",
                "mentor": "Observation is good, but participation is better. You need to contribute your own frequency to create that third force.",
                "consequence": "You learn a lot, but you fail to build the necessary influence and remain a spectator in your own life.",
                "xp": 175,
                "impact": {
                  "communication": 4
                },
                "trait": "+Education"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c6-s2-rf1",
            "prompt": "Identify one current goal where your solo effort has plateaued; who is the one person whose specific energy could catalyze a 'Third Mind' breakthrough for you?"
          },
          {
            "id": "thinkgrow-c6-s2-rf2",
            "prompt": "When you work with others, do you tend to seek harmony through agreement, or harmony through the coordination of different strengths? How does that impact your results?"
          }
        ]
      }
    ]
  },
  {
    "id": "thinkgrow-c7",
    "title": "The Sixth Sense",
    "summary": "The final step to riches is the apex of philosophy, where the finite mind communicates with Infinite Intelligence.",
    "sections": [
      {
        "id": "thinkgrow-c7-s1",
        "title": "The Creative Vision",
        "principle": "Through the sixth sense, one is warned of impending dangers and notified of opportunities in time.",
        "scenarios": [
          {
            "id": "thinkgrow-c7-s1-sc1",
            "title": "The Ghost in the Machine",
            "setup": "You are finalizing a massive acquisition that looks perfect on paper, but while staring at the contract, a visceral prickle of unease stops your hand. Your rational mind says it's just nerves, yet every instinct screams that a hidden liability is lurking in the fine print.",
            "choices": [
              {
                "id": "sign-immediately-to-main",
                "label": "Sign immediately to maintain momentum",
                "mentor": "You're acting like a blind horse charging an abyss! Speed without sight is just a faster car crash.",
                "consequence": "The deal closes, but a massive undisclosed debt surface weeks later, tanking your stock.",
                "xp": 45,
                "impact": {
                  "strategy": -4
                },
                "trait": "-Finance"
              },
              {
                "id": "call-for-a-24-hour-audit",
                "label": "Call for a 24-hour audit of the liability clause",
                "mentor": "That's the Sixth Sense talking! When the Infinite Intelligence taps your shoulder, you listen or you pay.",
                "consequence": "The audit reveals a predatory clause that would have bankrupted you; you renegotiate from a position of power.",
                "xp": 280,
                "impact": {
                  "mindset": 7
                },
                "trait": "+Mindset"
              },
              {
                "id": "ask-the-seller-to-clarif",
                "label": "Ask the seller to clarify the numbers verbally",
                "mentor": "Hearsay is garbage. If your gut is twitching, looking at the same liar won't help you see the truth.",
                "consequence": "The seller offers vague reassurances; you remain anxious and miss the opportunity to truly vet the danger.",
                "xp": 110,
                "impact": {
                  "strategy": 1
                },
                "trait": "-Strategy"
              }
            ]
          },
          {
            "id": "thinkgrow-c7-s1-sc2",
            "title": "The Uncharted Pivot",
            "setup": "Your current project is profitable but feels hollow, and a sudden, vivid flash of a new industry concept keeps interrupting your sleep. People think you’re crazy to change course now, but the vision is as clear as day.",
            "choices": [
              {
                "id": "abandon-the-old-project-",
                "label": "Abandon the old project to chase the vision",
                "mentor": "Leverage that creative flash! The Sixth Sense doesn't give you blueprints for things that already exist.",
                "consequence": "You struggle initially, but the new venture hits a massive untapped market, leading to exponential growth.",
                "xp": 295,
                "impact": {
                  "confidence": 8
                },
                "trait": "+Confidence"
              },
              {
                "id": "stick-to-the-proven-prof",
                "label": "Stick to the proven profitable path",
                "mentor": "Playing it safe is the loudest way to tell the universe you don't trust your own power. Boring!",
                "consequence": "You stay safe but become obsolete within two years as the market shifts exactly as you feared it would.",
                "xp": 50,
                "impact": {
                  "mindset": -5
                },
                "trait": "-Innovation"
              },
              {
                "id": "run-a-small-pilot-for-th",
                "label": "Run a small pilot for the new idea on the side",
                "mentor": "Hedging your bets is better than drowning, but you're starving your big vision of the energy it needs.",
                "consequence": "Progress is slow; you gain some data but lack the momentum to truly capture the opportunity.",
                "xp": 140,
                "impact": {
                  "discipline": 2
                },
                "trait": "+Strategy"
              }
            ]
          },
          {
            "id": "thinkgrow-c7-s1-sc3",
            "title": "The Silent Partner",
            "setup": "A charismatic influencer offers you a partnership that promises instant fame and scale. Everyone around you is saying 'yes', but a quiet, persistent inner voice warns you that their values are fundamentally misaligned with your legacy.",
            "choices": [
              {
                "id": "politely-decline-without",
                "label": "Politely decline without a concrete reason",
                "mentor": "That's pure intuition! You don't need a spreadsheet to tell you when a person's energy is toxic.",
                "consequence": "Six months later, the influencer is embroiled in a scandal that destroys all their associates; you remain untarnished.",
                "xp": 275,
                "impact": {
                  "stoicism": 6
                },
                "trait": "+Stoicism"
              },
              {
                "id": "sign-the-deal-but-includ",
                "label": "Sign the deal but include a strict kill-switch",
                "mentor": "You're trying to pet a cobra with a glove. Why even step into the pit?",
                "consequence": "The partnership is rocky and consumes your mental energy, but you manage to exit before the final crash.",
                "xp": 160,
                "impact": {
                  "negotiation": 3
                },
                "trait": "+Negotiation"
              },
              {
                "id": "ignore-the-hunch-and-pri",
                "label": "Ignore the hunch and prioritize the growth",
                "mentor": "You're selling your soul for a few views! When your inner radar pings, you don't ignore it for a paycheck.",
                "consequence": "The association spoils your brand reputation, making it impossible to attract high-tier talent later.",
                "xp": 40,
                "impact": {
                  "leadership": -6
                },
                "trait": "-Leadership"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c7-s1-rf1",
            "prompt": "Recall a time your 'gut feeling' warned you about a situation that seemed perfect on paper—did you listen, and what did that teach you about your internal radar?"
          },
          {
            "id": "thinkgrow-c7-s1-rf2",
            "prompt": "How would your daily decision-making change if you treated your sudden flashes of inspiration as direct intelligence rather than random imagination?"
          }
        ]
      },
      {
        "id": "thinkgrow-c7-s2",
        "title": "Conquering the Ghosts of Fear",
        "principle": "One must master the six basic fears to clear the way for spiritual and material abundance.",
        "scenarios": [
          {
            "id": "thinkgrow-c7-s2-sc1",
            "title": "The Glass Ceiling Sledgehammer",
            "setup": "You are offered a high-stakes leadership role that doubles your current salary but requires managing a failing department with public scrutiny. A cold sweat breaks as you realize failing here would destroy your reputation forever.",
            "choices": [
              {
                "id": "negotiate-a-safety-net-e",
                "label": "Negotiate a 'safety net' exit clause before signing.",
                "mentor": "You're building a parachute before you've even touched the sky! Caution is just fear wearing a suit and tie.",
                "consequence": "You get the safety net, but the Board views you as someone who lacks skin in the game.",
                "xp": 120,
                "impact": {
                  "negotiation": 2
                },
                "trait": "+Prudence"
              },
              {
                "id": "decline-to-protect-your-",
                "label": "Decline to protect your current perfect track record.",
                "mentor": "Stagnation is a slow death. You're letting the Ghost of Poverty haunt your future because you're scared of a little noise!",
                "consequence": "Your career plateaus and younger, hungrier peers begin to bypass your authority.",
                "xp": 40,
                "impact": {
                  "mindset": -5
                },
                "trait": "-Momentum"
              },
              {
                "id": "accept-immediately-and-d",
                "label": "Accept immediately and draft a 90-day radical turnaround plan.",
                "mentor": "That's the momentum I crave! Burn the boats and watch how fast your mind finds the solution.",
                "consequence": "The bold move galvanizes the team and eliminates the Fear of Criticism through sheer results.",
                "xp": 280,
                "impact": {
                  "leadership": 7
                },
                "trait": "+Audacity"
              }
            ]
          },
          {
            "id": "thinkgrow-c7-s2-sc2",
            "title": "The Diagnostic Shadow",
            "setup": "A persistent, dull ache in your chest has been ignored for weeks because you are terrified of what a doctor might find. Your productivity is tanking because you spend your nights searching symptoms online.",
            "choices": [
              {
                "id": "book-the-earliest-specia",
                "label": "Book the earliest specialist appointment available today.",
                "mentor": "Face the ghost! The Fear of Ill Health thrives in the dark, but it dies under a spotlight.",
                "consequence": "Knowledge replaces dread, allowing you to either treat the issue or regain your focus immediately.",
                "xp": 250,
                "impact": {
                  "emotionalControl": 6
                },
                "trait": "+Vitality"
              },
              {
                "id": "double-your-caffeine-int",
                "label": "Double your caffeine intake to 'power through' the fatigue.",
                "mentor": "You're redlining a broken engine! You can't outrun biology with a cup of joe.",
                "consequence": "Your anxiety spikes, leading to a panic attack that costs you a major client meeting.",
                "xp": 50,
                "impact": {
                  "discipline": -4
                },
                "trait": "-Health"
              },
              {
                "id": "ask-a-friend-for-their-o",
                "label": "Ask a friend for their opinion to avoid a formal bill.",
                "mentor": "Amateur hour. If you want professional results, you stop asking for basement-level advice.",
                "consequence": "Temporary relief turns back into terror the moment the ache returns at midnight.",
                "xp": 90,
                "impact": {
                  "strategy": 1
                },
                "trait": "-Finance"
              }
            ]
          },
          {
            "id": "thinkgrow-c7-s2-sc3",
            "title": "The Partnership Pivot",
            "setup": "Your long-term business partner suggests a pivot into AI that contradicts your traditional methods. You find yourself irrationally angry, subconsciously fearing that your old skills are becoming obsolete.",
            "choices": [
              {
                "id": "block-the-pivot-to-prote",
                "label": "Block the pivot to protect your established expertise.",
                "mentor": "That's the Fear of Old Age and irrelevance talking. If you don't evolve, you're a fossil.",
                "consequence": "Market share drops by 30% within a year as competitors embrace the new tech.",
                "xp": 60,
                "impact": {
                  "mindset": -6
                },
                "trait": "-Innovation"
              },
              {
                "id": "enroll-in-an-intensive-c",
                "label": "Enroll in an intensive certification to master the new tech.",
                "mentor": "Yes! Leverage the change! Turn that fear of the unknown into a competitive edge.",
                "consequence": "You become the bridge between the old world and the new, doubling your value.",
                "xp": 300,
                "impact": {
                  "discipline": 8
                },
                "trait": "+Evolution"
              },
              {
                "id": "agree-to-a-small-low-ris",
                "label": "Agree to a small, low-risk pilot program.",
                "mentor": "You're dipping a toe in when you should be surfing the wave. Speed is everything!",
                "consequence": "The pilot succeeds, but you've lost the first-mover advantage to more aggressive firms.",
                "xp": 140,
                "impact": {
                  "strategy": 3
                },
                "trait": "+Caution"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "thinkgrow-c7-s2-rf1",
            "prompt": "Which of the six basic fears (Poverty, Criticism, Ill Health, Loss of Love, Old Age, Death) is currently acting as the loudest 'ghost' in your decision-making?"
          },
          {
            "id": "thinkgrow-c7-s2-rf2",
            "prompt": "If you knew with 100% certainty that you could not fail, what specific bold action would you take in your career by tomorrow morning?"
          }
        ]
      }
    ]
  }
];
