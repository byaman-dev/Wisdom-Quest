import type { BookChapter } from "@/types";

export const artofwarChapters: BookChapter[] = [
  {
    "id": "artofwar-c1",
    "title": "Laying Plans: The Foundation of Victory",
    "summary": "Success is determined in the temple of calculation before a single soldier moves.",
    "sections": [
      {
        "id": "artofwar-c1-s1",
        "title": "The Five Factors",
        "principle": "Appraise the engagement based on Moral Law, Heaven, Earth, Command, and Method.",
        "scenarios": [
          {
            "id": "artofwar-c1-s1-sc1",
            "title": "The Disruptive Merger",
            "setup": "You are leading a small tech firm being courted for a merger by a ruthless conglomerate. While the payout is massive, their corporate culture is toxic, and the timing coincides with a major market shift. You must decide if the structural foundation for victory exists beyond the balance sheet.",
            "choices": [
              {
                "id": "reject-the-deal-and-pivo",
                "label": "Reject the deal and pivot to a new niche",
                "mentor": "You weigh the Moral Law. To lead men where their hearts refuse to go is to court mutiny before the first march.",
                "consequence": "Staff loyalty skyrockets but short-term capital remains tight, forcing lean operations for six months.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Integrity"
              },
              {
                "id": "take-the-payout-and-igno",
                "label": "Take the payout and ignore cultural friction",
                "mentor": "A general who ignores the terrain of the mind will find his camp deserted by dawn. Gold cannot buy a soldier's spirit.",
                "consequence": "Your core developers resign within weeks; the product fails and your reputation as a leader is tarnished.",
                "xp": 60,
                "impact": {
                  "leadership": -5
                },
                "trait": "-Reputation"
              },
              {
                "id": "counter-offer-with-a-str",
                "label": "Counter-offer with a strict autonomy clause",
                "mentor": "You seek to bridge Heaven and Earth with ink. It is a fragile bridge that requires constant guarding.",
                "consequence": "The deal proceeds but legal fees drain your resources as you constantly fight for control.",
                "xp": 150,
                "impact": {
                  "negotiation": 3
                },
                "trait": "+Caution"
              }
            ]
          },
          {
            "id": "artofwar-c1-s1-sc2",
            "title": "The Seasonal Product Launch",
            "setup": "Your startup's flagship product is ready, but your lead designer just quit and a major economic recession has just been signaled. The 'Heaven' of timing and 'Command' of leadership are in total disarray.",
            "choices": [
              {
                "id": "delay-the-launch-to-rebu",
                "label": "Delay the launch to rebuild the team",
                "mentor": "Numerical strength is nothing without Method. Do not cast your net into a storm when the holes are yet unpatched.",
                "consequence": "Competitors gain an edge, but your eventual launch is flawless and gains market dominance.",
                "xp": 260,
                "impact": {
                  "discipline": 7
                },
                "trait": "+Patience"
              },
              {
                "id": "aggressive-marketing-to-",
                "label": "Aggressive marketing to mask internal chaos",
                "mentor": "You scream louder to hide a broken sword. The enemy only needs to watch you swing once to know the truth.",
                "consequence": "High customer acquisition costs lead to a massive net loss and a public service meltdown.",
                "xp": 50,
                "impact": {
                  "mindset": -4
                },
                "trait": "-Finance"
              },
              {
                "id": "launch-a-limited-beta-fo",
                "label": "Launch a limited ‘beta’ for loyalists only",
                "mentor": "Small victories sustain a starving army. It is a tactical retreat disguised as a step forward.",
                "consequence": "Revenue is slow but you gather enough data to fix the internal issues without a public scandal.",
                "xp": 180,
                "impact": {
                  "emotionalControl": 4
                },
                "trait": "+Humility"
              }
            ]
          },
          {
            "id": "artofwar-c1-s1-sc3",
            "title": "The Hostile Office Climate",
            "setup": "A rival manager is sabotaging your project by withholding resources and spreading rumors. This is 'Earth'—the difficult terrain of your workplace—where the path to victory is narrowed by politics.",
            "choices": [
              {
                "id": "map-their-dependencies-a",
                "label": "Map their dependencies and secure the bottlenecks",
                "mentor": "He who occupies the high ground first dictates the flow of the river. Control the supply, and the enemy must come to you.",
                "consequence": "The rival is forced to cooperate to meet their own KPIs, cementing your structural power in the office.",
                "xp": 300,
                "impact": {
                  "strategy": 8
                },
                "trait": "+influence"
              },
              {
                "id": "publicly-confront-them-d",
                "label": "Publicly confront them during a meeting",
                "mentor": "Anger is a fog. You have shown your hand before the bet was even called. Now they know where to strike.",
                "consequence": "HR gets involved; you are labeled as 'difficult to work with' while the rival plays the victim.",
                "xp": 45,
                "impact": {
                  "emotionalControl": -6
                },
                "trait": "-Stature"
              },
              {
                "id": "seek-a-neutral-third-par",
                "label": "Seek a neutral third-party mediator",
                "mentor": "You rely on the strength of another's shield. It protects you today, but leaves you in their debt tomorrow.",
                "consequence": "The immediate conflict ceases, but you are now perceived as someone who cannot handle their own battles.",
                "xp": 130,
                "impact": {
                  "communication": 2
                },
                "trait": "+Diplomacy"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c1-s1-rf1",
            "prompt": "Which of the Five Factors—Moral Law, Heaven, Earth, Command, or Method—is currently the weakest link in your most important personal project?"
          },
          {
            "id": "artofwar-c1-s1-rf2",
            "prompt": "When was the last time you entered a conflict without first 'calculating in the temple'? What specific detail did you overlook?"
          }
        ]
      },
      {
        "id": "artofwar-c1-s2",
        "title": "The Art of Deception",
        "principle": "Mask your capabilities and intentions to ensure the enemy is unprepared for your reality.",
        "scenarios": [
          {
            "id": "artofwar-c1-s2-sc1",
            "title": "The Glass Office",
            "setup": "You are developing a disruptive software feature that a larger competitor is eager to crush or acquire cheaply. During a casual networking mixer, their Lead Strategist corners you and asks pointed questions about your launch timeline and current technical limitations.",
            "choices": [
              {
                "id": "complain-about-technical",
                "label": "Complain about technical 'bugs' and a delayed schedule",
                "mentor": "The fish that looks for bait avoids the hook. Let them feast on the illusion of your struggle while you sharpen your blade in silence.",
                "consequence": "The competitor deprioritizes their rival feature, giving you a three-month window of uncontested market entry.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Cunning"
              },
              {
                "id": "vaguely-emphasize-your-t",
                "label": "Vaguely emphasize your team's hard work and passion",
                "mentor": "Vagueness is a thin veil. A skilled tracker sees through the mist to the tracks you leave behind.",
                "consequence": "The strategist remains suspicious and keeps a close eye on your public filings and LinkedIn hires.",
                "xp": 120,
                "impact": {
                  "communication": 2
                },
                "trait": "+Neutrality"
              },
              {
                "id": "confidently-detail-your-",
                "label": "Confidently detail your breakthroughs to signal strength",
                "mentor": "To show your hand is to invite the opponent to cut it off. You have traded your victory for the hollow heat of vanity.",
                "consequence": "The competitor immediately doubles their R&D budget to mirror your feature before you can launch.",
                "xp": 50,
                "impact": {
                  "emotionalControl": -5
                },
                "trait": "-Insight"
              }
            ]
          },
          {
            "id": "artofwar-c1-s2-sc2",
            "title": "The Salary Gambit",
            "setup": "You are interviewing for a role you are overqualified for, but you desperately want the company's equity. The recruiter asks for your current salary, hoping to anchor their offer low based on your previous 'modest' earnings.",
            "choices": [
              {
                "id": "pivot-to-discussing-the-",
                "label": "Pivot to discussing the value of the role's responsibilities",
                "mentor": "A stalemate is better than a surrender. You have held the line, but you have not yet turned the flank.",
                "consequence": "The negotiation continues on neutral ground, but you lose the chance to manipulate their expectations early.",
                "xp": 150,
                "impact": {
                  "negotiation": 3
                },
                "trait": "+Composure"
              },
              {
                "id": "inflate-your-current-tot",
                "label": "Inflate your current 'total compensation' package figures",
                "mentor": "A clumsy lie is a broken bridge. When the bridge falls, you are trapped in the canyon of your own making.",
                "consequence": "Background checks reveal the discrepancy, resulting in a rescinded offer and a damaged reputation in the industry.",
                "xp": 40,
                "impact": {
                  "mindset": -6
                },
                "trait": "-Integrity"
              },
              {
                "id": "project-humble-uncertain",
                "label": "Project humble uncertainty about your 'other offers'",
                "mentor": "Appear weak when you are strong. Let their fear of losing a 'hidden gem' drive the price upward.",
                "consequence": "Thinking they have a steal, they provide a high-equity offer to close the deal before 'competitors' notice you.",
                "xp": 290,
                "impact": {
                  "negotiation": 7
                },
                "trait": "+Leverage"
              }
            ]
          },
          {
            "id": "artofwar-c1-s2-sc3",
            "title": "The Silent Upgrade",
            "setup": "You have spent the last six months mastering a new technical skill in private while your coworkers believe you are just coasting. A high-stakes project suddenly opens up that requires exactly that skill.",
            "choices": [
              {
                "id": "volunteer-immediately-an",
                "label": "Volunteer immediately and boast about your secret training",
                "mentor": "The peacock wins the beauty contest but loses the forest. You have alerted your rivals to your parity.",
                "consequence": "Jealous colleagues lobby against your selection, fearing your sudden rise will overshadow their tenure.",
                "xp": 60,
                "impact": {
                  "leadership": -4
                },
                "trait": "-Tactics"
              },
              {
                "id": "wait-for-the-manager-to-",
                "label": "Wait for the manager to struggle, then offer a 'test' solution",
                "mentor": "Strike when the gap is widest. By appearing as a sudden savior, your value is multiplied tenfold.",
                "consequence": "Your 'unexpected' mastery secures you a promotion and leaves rivals unable to plan a counter-move in time.",
                "xp": 300,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Timing"
              },
              {
                "id": "decline-the-project-to-s",
                "label": "Decline the project to stay under the radar longer",
                "mentor": "The blade that stays forever in the sheath eventually rusts. Do not mistake cowardice for caution.",
                "consequence": "You maintain your secret, but a less-capable peer takes the role, setting the department back months.",
                "xp": 110,
                "impact": {
                  "discipline": 1
                },
                "trait": "+Secrecy"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c1-s2-rf1",
            "prompt": "In your current professional or social circle, what specific strength of yours would be most powerful if it remained completely unknown to others until the moment of use?"
          },
          {
            "id": "artofwar-c1-s2-rf2",
            "prompt": "Recall a time your eagerness to 'look capable' actually invited unnecessary obstacles or envy. How would a mask of humility have changed that outcome?"
          }
        ]
      }
    ]
  },
  {
    "id": "artofwar-c2",
    "title": "Waging War: The Cost of Conflict",
    "summary": "Wealth and strength are depleted by duration, making speed the most vital essence of war.",
    "sections": [
      {
        "id": "artofwar-c2-s1",
        "title": "The Burden of Expansion",
        "principle": "Prolonged campaigns drain the treasury and blunt the spirit of the people.",
        "scenarios": [
          {
            "id": "artofwar-c2-s1-sc1",
            "title": "The Infinite Freelance Project",
            "setup": "You are six months into a client contract that was supposed to last six weeks. The scope keeps creeping, your energy is flagging, and the fixed fee is no longer covering your overhead.",
            "choices": [
              {
                "id": "deliver-an-immediate-min",
                "label": "Deliver an immediate 'Minimum Viable Product' and exit.",
                "mentor": "Victory is the object, not the persistence. Cut the thread before the loom breaks your hands.",
                "consequence": "You lose a potential referral but save 200 hours of labor and your sanity.",
                "xp": 280,
                "impact": {
                  "strategy": 7
                },
                "trait": "+Strategic Withdrawal"
              },
              {
                "id": "negotiate-a-higher-fee-t",
                "label": "Negotiate a higher fee to justify the extra time.",
                "mentor": "Gold may replenish the purse, but no amount of coin can buy back a blunted spirit.",
                "consequence": "The project continues to drain your focus for another three months.",
                "xp": 140,
                "impact": {
                  "negotiation": 2
                },
                "trait": "+Negotiation"
              },
              {
                "id": "work-overtime-to-finaliz",
                "label": "Work overtime to finalize every detail perfectly.",
                "mentor": "You sharpen your blade until it is gone. A dull tool in a tired hand invites disaster.",
                "consequence": "Burnout leads to a major error on your next high-stakes contract.",
                "xp": 50,
                "impact": {
                  "discipline": -5
                },
                "trait": "-Vitality"
              }
            ]
          },
          {
            "id": "artofwar-c2-s1-sc2",
            "title": "Market Penetration",
            "setup": "Your startup is burning through capital trying to capture a massive secondary market that is resisting your product. Your core team is exhausted and your cash runway is shrinking daily.",
            "choices": [
              {
                "id": "retreat-to-your-core-nic",
                "label": "Retreat to your core niche immediately.",
                "mentor": "To move a mountain with a shovel is not courage; it is waste. Conserve your strength for the fertile soil.",
                "consequence": "Growth slows temporarily, but your treasury remains secure for the long winter.",
                "xp": 290,
                "impact": {
                  "finance": 8
                },
                "trait": "+Prudence"
              },
              {
                "id": "launch-a-massive-expensi",
                "label": "Launch a massive, expensive marketing blitz to break the deadlock.",
                "mentor": "A loud drum does not win the battle if the soldiers cannot march. You gamble your foundation on a single shout.",
                "consequence": "A brief spike in users occurs, followed by an even faster rate of attrition.",
                "xp": 120,
                "impact": {
                  "confidence": 1
                },
                "trait": "+Risk"
              },
              {
                "id": "mandate-weekend-shifts-t",
                "label": "Mandate weekend shifts to outwork the competition.",
                "mentor": "Anger your people and they will turn their spears inward. A broken army cannot hold captured ground.",
                "consequence": "Three key engineers resign, and your product development stalls completely.",
                "xp": 45,
                "impact": {
                  "leadership": -6
                },
                "trait": "-Leadership"
              }
            ]
          },
          {
            "id": "artofwar-c2-s1-sc3",
            "title": "The Toxic Dispute",
            "setup": "You are embroiled in a messy legal disagreement over a property boundary. The lawyer fees are mounting, and the stress is leaking into your relationship with your partner.",
            "choices": [
              {
                "id": "offer-a-generous-settlem",
                "label": "Offer a generous settlement to end it today.",
                "mentor": "The wise man pays the ransom of his peace. Do not let a handful of dirt bury your happiness.",
                "consequence": "You lose a small sum of money but regain your sleep and preserve your marriage.",
                "xp": 270,
                "impact": {
                  "emotionalControl": 7
                },
                "trait": "+Stoicism"
              },
              {
                "id": "gather-more-evidence-and",
                "label": "Gather more evidence and wait for a court date.",
                "mentor": "Waiting is only a virtue if the enemy is decaying. Here, you are the one rotting in the sun.",
                "consequence": "The case drags on for two years, casting a shadow over every weekend spent at home.",
                "xp": 110,
                "impact": {
                  "mindset": 2
                },
                "trait": "+Patience"
              },
              {
                "id": "escalate-the-conflict-to",
                "label": "Escalate the conflict to 'teach them a lesson'.",
                "mentor": "He who seeks revenge must dig two graves. Your treasury will empty before your ego is satisfied.",
                "consequence": "Legal fees exceed the value of the land, and your local reputation is tarnished.",
                "xp": 40,
                "impact": {
                  "strategy": -4
                },
                "trait": "-Wisdom"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c2-s1-rf1",
            "prompt": "Identify a 'war of attrition' currently in your life—a project, argument, or habit—that is costing you more in time and spirit than it is worth to win."
          },
          {
            "id": "artofwar-c2-s1-rf2",
            "prompt": "How does your fear of 'wasted effort' or 'sunk costs' prevent you from executing the swift exit that Sun Tzu advises?"
          }
        ]
      },
      {
        "id": "artofwar-c2-s2",
        "title": "Foraging on the Enemy",
        "principle": "Reduce your own logistical strain by capturing and utilizing the opponent's resources.",
        "scenarios": [
          {
            "id": "artofwar-c2-s2-sc1",
            "title": "The Tech Buyout Strategy",
            "setup": "You are leading a lean startup competing with a massive conglomerate for market share. Your budget for server infrastructure is vanishing, but your competitor has just abandoned a poorly managed regional data center.",
            "choices": [
              {
                "id": "acquire-their-distressed",
                "label": "Acquire their distressed facility and rebrand it immediately.",
                "mentor": "Smart. Why build a spear when the enemy has already forged one for you to snatch?",
                "consequence": "Immediate reduction in overhead costs and rapid scaling into their previous territory.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Efficiency"
              },
              {
                "id": "continue-building-your-o",
                "label": "Continue building your own proprietary data center from scratch.",
                "mentor": "Pride is a heavy tax. You pay in gold for what could have been taken with a signature.",
                "consequence": "Your infrastructure is pure but you burn through your seed funding six months too early.",
                "xp": 120,
                "impact": {
                  "finance": 2
                },
                "trait": "-Finance"
              },
              {
                "id": "ignore-the-competitor-an",
                "label": "Ignore the competitor and hope their failure doesn't affect the market.",
                "mentor": "To watch a feast rot while you starve is not virtue; it is a slow suicide.",
                "consequence": "A third-party firm buys the center, locking you out of the market permanently.",
                "xp": 45,
                "impact": {
                  "mindset": -5
                },
                "trait": "-Vision"
              }
            ]
          },
          {
            "id": "artofwar-c2-s2-sc2",
            "title": "Negotiating Internal Assets",
            "setup": "Your department's project has been stalled due to a lack of specialized researchers. A rival department just had their funding cut, leaving five experts sitting idle on their payroll.",
            "choices": [
              {
                "id": "offer-to-cover-their-rem",
                "label": "Offer to cover their remaining budget if they transfer to your team.",
                "mentor": "The wise commander feeds on the enemy’s grain. One of their experts is worth twenty of your recruits.",
                "consequence": "Project resumes instantly with elite talent while your recruitment costs drop to zero.",
                "xp": 250,
                "impact": {
                  "negotiation": 7
                },
                "trait": "+Resourcefulness"
              },
              {
                "id": "ask-for-a-temporary-cons",
                "label": "Ask for a temporary consultation from the idle experts.",
                "mentor": "A borrowed sword is blunt. Only by making their strength your own do you truly conquer.",
                "consequence": "Short-term momentum is gained, but you remain dependent on a rival's permission.",
                "xp": 110,
                "impact": {
                  "leadership": 3
                },
                "trait": "+Communication"
              },
              {
                "id": "wait-for-hr-to-post-new-",
                "label": "Wait for HR to post new roles and hire fresh graduates.",
                "mentor": "You wait for rain while a river flows beside you. The clock is a killer.",
                "consequence": "The project misses its deadline and the rival experts are poached by another company.",
                "xp": 50,
                "impact": {
                  "strategy": -4
                },
                "trait": "-Agility"
              }
            ]
          },
          {
            "id": "artofwar-c2-s2-sc3",
            "title": "The Marketing Guerilla",
            "setup": "A rival brand has launched a massive, failing ad campaign centered on a specific hashtag. You see an opportunity to pivot your smaller budget and hijack the conversation.",
            "choices": [
              {
                "id": "use-their-hashtag-to-off",
                "label": "Use their hashtag to offer a 'rescue' discount for their unhappy customers.",
                "mentor": "They paved the road. You simply drive the chariot. Use their momentum to crush them.",
                "consequence": "Viral growth fueled by the rival's ad spend, draining their customer base.",
                "xp": 290,
                "impact": {
                  "mindset": 8
                },
                "trait": "+Opportunism"
              },
              {
                "id": "launch-your-own-separate",
                "label": "Launch your own separate campaign with a different message.",
                "mentor": "You choose to fight uphill. It is honorable, but it is expensive.",
                "consequence": "Modest growth that requires twice the effort and three times the original budget.",
                "xp": 130,
                "impact": {
                  "finance": 1
                },
                "trait": "+Independence"
              },
              {
                "id": "report-their-ads-for-spa",
                "label": "Report their ads for spam to clear the digital space.",
                "mentor": "Tearing down a wall does not build a house. You waste energy on spite while profit escapes.",
                "consequence": "A PR backlash occurs and your brand is viewed as petty rather than competitive.",
                "xp": 40,
                "impact": {
                  "emotionalControl": -6
                },
                "trait": "-Ethics"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c2-s2-rf1",
            "prompt": "Identify a 'resource' currently being wasted by a competitor or peer in your real life—how could you ethically repurpose it for your own goals?"
          },
          {
            "id": "artofwar-c2-s2-rf2",
            "prompt": "When in your past did you insist on building everything from scratch rather than using available tools? What was the true cost of that pride?"
          }
        ]
      }
    ]
  },
  {
    "id": "artofwar-c3",
    "title": "Strategic Attack: Winning Without Battle",
    "summary": "The highest excellence consists in breaking the enemy's resistance without fighting.",
    "sections": [
      {
        "id": "artofwar-c3-s1",
        "title": "Priorities of Assault",
        "principle": "Attack the enemy's strategy first, then their alliances, and their army only as a last resort.",
        "scenarios": [
          {
            "id": "artofwar-c3-s1-sc1",
            "title": "The Tech Startup Merger",
            "setup": "A larger competitor is aggressively trying to put your boutique software firm out of business through a price war. You realize that facing them head-on in pricing will deplete your reserves before the quarter ends.",
            "choices": [
              {
                "id": "leach-their-talent-by-le",
                "label": "Leach their talent by leaking a superior long-term roadmap.",
                "mentor": "The supreme art of war is to break the enemy's will. By attacking their vision, you make their heavy treasury irrelevant.",
                "consequence": "Top engineers defect to you, stalling their development while preserving your cash flow.",
                "xp": 250,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Strategic Depth"
              },
              {
                "id": "negotiate-a-partnership-",
                "label": "Negotiate a partnership with their primary hardware supplier.",
                "mentor": "Closer to the mark. To sever their alliances is to leave them standing on one leg, but be cautious of the cost.",
                "consequence": "The competitor is delayed, but you have now tethered your fate to a volatile third party.",
                "xp": 120,
                "impact": {
                  "negotiation": 4
                },
                "trait": "+Diplomacy"
              },
              {
                "id": "slash-your-prices-furthe",
                "label": "Slash your prices further to match their lowest offer.",
                "mentor": "You enter a burning house to prove you can endure heat. This is not strategy; it is suicide by ego.",
                "consequence": "You gain brief market share but go bankrupt within six months. The enemy wins by doing nothing.",
                "xp": 45,
                "impact": {
                  "finance": -5
                },
                "trait": "-Finance"
              }
            ]
          },
          {
            "id": "artofwar-c3-s1-sc2",
            "title": "The Office Saboteur",
            "setup": "A colleague is spreading rumors to undermine your project lead candidacy. They have built a small clique of supporters who echo their criticisms in staff meetings.",
            "choices": [
              {
                "id": "individually-help-their-",
                "label": "Individually help their supporters with their own metrics.",
                "mentor": "Remove the foundation and the roof must fall. When the enemy loses their friends, they lose their voice.",
                "consequence": "The clique dissolves as they find more value in your success than the saboteur's gossip.",
                "xp": 280,
                "impact": {
                  "emotionalControl": 7
                },
                "trait": "+Leadership"
              },
              {
                "id": "publicly-confront-the-sa",
                "label": "Publicly confront the saboteur during a meeting.",
                "mentor": "You have chosen to besiege a walled city. Now everyone sees two squabbling children instead of one leader.",
                "consequence": "The department becomes polarized and HR adds a note of 'lack of professionalism' to your file.",
                "xp": 50,
                "impact": {
                  "communication": -4
                },
                "trait": "-Social Status"
              },
              {
                "id": "request-a-private-mediat",
                "label": "Request a private mediation with the manager present.",
                "mentor": "A cautious move, but you have surrendered your agency to a judge who may not favor logic.",
                "consequence": "The rumors stop temporarily, but the underlying hostility remains unresolved.",
                "xp": 110,
                "impact": {
                  "discipline": 2
                },
                "trait": "+Compliance"
              }
            ]
          },
          {
            "id": "artofwar-c3-s1-sc3",
            "title": "The Community Conflict",
            "setup": "A local developer wants to turn your neighborhood's shared garden into a parking lot. They have already secured several legal permits and have a construction crew ready.",
            "choices": [
              {
                "id": "reframe-the-garden-as-a-",
                "label": "Reframe the garden as a historical landmark to invalidate their permits.",
                "mentor": "Attack the plan itself. If the strategy is illegal, the army cannot even march.",
                "consequence": "The developer’s legal framework collapses, forcing them to abandon the project entirely.",
                "xp": 300,
                "impact": {
                  "mindset": 8
                },
                "trait": "+Ingenuity"
              },
              {
                "id": "protest-at-the-site-to-b",
                "label": "Protest at the site to block the bulldozers manually.",
                "mentor": "This is a direct assault on the infantry. You will exhaust your strength and blood for a few feet of dirt.",
                "consequence": "Arrests follow and the community loses its morale; the bulldozers return the next day.",
                "xp": 40,
                "impact": {
                  "stoicism": -6
                },
                "trait": "-Stability"
              },
              {
                "id": "lobby-the-local-business",
                "label": "Lobby the local businesses to pull their funding for the developer.",
                "mentor": "Cutting the supply lines is an old wisdom. It is effective, but expect a long, slow siege.",
                "consequence": "The developer slows down, but the legal permits remain a ticking clock.",
                "xp": 150,
                "impact": {
                  "leadership": 5
                },
                "trait": "+Networking"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c3-s1-rf1",
            "prompt": "Identify a recurring conflict in your life. How could you solve it by changing the 'game' itself rather than fighting the person involved?"
          },
          {
            "id": "artofwar-c3-s1-rf2",
            "prompt": "Think of a time you 'won' an argument but felt worse afterward. Looking back, which of your opponent's 'alliances' should you have respected or leveraged instead?"
          }
        ]
      },
      {
        "id": "artofwar-c3-s2",
        "title": "The Five Essentials for Victory",
        "principle": "Victory belongs to the one who knows when to fight and when not to fight.",
        "scenarios": [
          {
            "id": "artofwar-c3-s2-sc1",
            "title": "The Start-up Gazelle",
            "setup": "A direct competitor just launched a predatory marketing campaign specifically targeting your loyal customers with lies. Your board of directors is screaming for a costly counter-lawsuit that would drain your remaining venture capital.",
            "choices": [
              {
                "id": "file-the-lawsuit-to-prot",
                "label": "File the lawsuit to protect your brand honor.",
                "mentor": "You trade your gold for their dust. A general who acts in anger creates only a graveyard of resources.",
                "consequence": "Legal fees deplete your runway; your product development stalls while you focus on the courtroom.",
                "xp": 45,
                "impact": {
                  "strategy": -5
                },
                "trait": "-Finance"
              },
              {
                "id": "ignore-the-noise-and-acc",
                "label": "Ignore the noise and accelerate your next feature launch.",
                "mentor": "The superior path is to make their attacks irrelevant. While they bark at the past, you capture the future.",
                "consequence": "User retention increases as the product improves; the competitor looks desperate and outdated.",
                "xp": 280,
                "impact": {
                  "mindset": 7
                },
                "trait": "+Discipline"
              },
              {
                "id": "release-a-cheeky-social-",
                "label": "Release a cheeky social media rebuttal.",
                "mentor": "A skirmish of words is a distraction. It satisfies the ego but does not move the front line.",
                "consequence": "Temporary viral engagement occurs, but the underlying threat to your market share remains unaddressed.",
                "xp": 120,
                "impact": {
                  "emotionalControl": 2
                },
                "trait": "+Communication"
              }
            ]
          },
          {
            "id": "artofwar-c3-s2-sc2",
            "title": "The Promotion Rivalry",
            "setup": "A toxic colleague is trying to bait you into a public argument during the weekly strategy meeting. If you lose your cool, you look unprofessional; if you stay silent, you might look weak to the CEO.",
            "choices": [
              {
                "id": "publicly-dismantle-their",
                "label": "Publicly dismantle their flawed data point by point.",
                "mentor": "You win the argument but lose the ally. Victory is hollow when it sows the seeds of future resentment.",
                "consequence": "The team sees your intelligence, but the CEO marks you as someone who struggles with team harmony.",
                "xp": 110,
                "impact": {
                  "communication": 3
                },
                "trait": "+Confidence"
              },
              {
                "id": "smile-take-notes-and-ask",
                "label": "Smile, take notes, and ask for their data to 'review later'.",
                "mentor": "He who knows when to yield controls the momentum. You deprive them of the friction they need to burn you.",
                "consequence": "The colleague loses their power over you, and you maintain a reputation for unshakeable composure.",
                "xp": 290,
                "impact": {
                  "emotionalControl": 8
                },
                "trait": "+Stoicism"
              },
              {
                "id": "walk-out-of-the-meeting-",
                "label": "Walk out of the meeting to show your disdain.",
                "mentor": "To abandon the field is to admit defeat without a single arrow fired. You have surrendered your position.",
                "consequence": "The CEO questions your commitment; the colleague successfully painted you as emotionally unstable.",
                "xp": 40,
                "impact": {
                  "discipline": -6
                },
                "trait": "-Leadership"
              }
            ]
          },
          {
            "id": "artofwar-c3-s2-sc3",
            "title": "The Family Inheritance",
            "setup": "Your siblings are fighting over your late uncle's estate, bickering over sentimental items and small sums. The conflict is turning bitter, and you are being pressured to take a side and join the fray.",
            "choices": [
              {
                "id": "renounce-your-claim-to-t",
                "label": "Renounce your claim to the disputed items to keep the peace.",
                "mentor": "To lose the small is to win the great. Peace in the home is worth more than silver in a broken house.",
                "consequence": "You lose minor assets but preserve your mental health and family relationships for the long term.",
                "xp": 275,
                "impact": {
                  "negotiation": 6
                },
                "trait": "+Wisdom"
              },
              {
                "id": "hire-a-mediator-to-ensur",
                "label": "Hire a mediator to ensure everything is split 100% equally.",
                "mentor": "A middle path often requires a heavy toll. You seek fairness where only emotions reside.",
                "consequence": "The bickering slows, but legal costs eat into the inheritance and the vibe remains cold.",
                "xp": 130,
                "impact": {
                  "strategy": 2
                },
                "trait": "+Finance"
              },
              {
                "id": "aggressively-lobby-for-t",
                "label": "Aggressively lobby for the items you deserve.",
                "mentor": "You burn the forest to catch a rabbit. The prize will be ash in your mouth once the fire dies.",
                "consequence": "You get the items, but your siblings stop speaking to you, creating a decade of family trauma.",
                "xp": 50,
                "impact": {
                  "emotionalControl": -4
                },
                "trait": "-Stoicism"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c3-s2-rf1",
            "prompt": "Identify a situation in your life right now where you are 'fighting' by habit rather than necessity. What would happen if you simply stopped engaging?"
          },
          {
            "id": "artofwar-c3-s2-rf2",
            "prompt": "Sun Tzu suggests that knowing when NOT to fight is the highest skill. Describe a time you 'won' an argument but felt like you lost something more important."
          }
        ]
      }
    ]
  },
  {
    "id": "artofwar-c4",
    "title": "Tactical Dispositions: The Unassailable State",
    "summary": "To secure ourselves against defeat lies in our own hands, but the opportunity of defeating the enemy is provided by the enemy himself.",
    "sections": [
      {
        "id": "artofwar-c4-s1",
        "title": "Invincibility and Vulnerability",
        "principle": "First make yourself impossible to defeat, then wait for the moment the enemy exposes a flaw.",
        "scenarios": [
          {
            "id": "artofwar-c4-s1-sc1",
            "title": "The Defensive Moat",
            "setup": "A rival startup has launched a predatory pricing campaign to drive you out of the market. While they burn investors' cash to steal your users, your own infrastructure is stable but lean.",
            "choices": [
              {
                "id": "cut-costs-further-and-fo",
                "label": "Cut costs further and fortify your core product's reliability.",
                "mentor": "The expert in defense hides in the most secret recesses of the earth. Let them exhaust their treasury against your silence.",
                "consequence": "You survive the price war unmoved. When the rival runs out of funding, their desperate shareholders force a merger on your terms.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Patience"
              },
              {
                "id": "enter-a-bidding-war-to-m",
                "label": "Enter a bidding war to match their unsustainable prices.",
                "mentor": "You enter a burning house to save a chair. To fight according to the enemy's pace is to accept their victory.",
                "consequence": "Your cash reserves dwindle to zero within months. You are forced to shut down just as the rival starts to stumble.",
                "xp": 50,
                "impact": {
                  "finance": -6
                },
                "trait": "-Impulsiveness"
              },
              {
                "id": "launch-a-massive-pr-camp",
                "label": "Launch a massive PR campaign to shame their tactics.",
                "mentor": "Noise is not strength. You signal your fear while leaving your gates unlocked.",
                "consequence": "You gain temporary public sympathy, but your internal operations remain chaotic and vulnerable to their next move.",
                "xp": 120,
                "impact": {
                  "leadership": 2
                },
                "trait": "+Communication"
              }
            ]
          },
          {
            "id": "artofwar-c4-s1-sc2",
            "title": "The Office Cold War",
            "setup": "A toxic colleague is trying to bait you into a public argument to make you look unprofessional before a promotion review. They have just insulted your work in a large email thread.",
            "choices": [
              {
                "id": "reply-with-a-factual-emo",
                "label": "Reply with a factual, emotionless report confirming the project status.",
                "mentor": "He who is skilled in defense makes his position unassailable. Give them no blade to grasp.",
                "consequence": "Your boss notes your composure. The colleague, frustrated by your lack of reaction, eventually sends a truly unhinged email that ruins their own reputation.",
                "xp": 250,
                "impact": {
                  "emotionalControl": 7
                },
                "trait": "+Stoicism"
              },
              {
                "id": "sarcastically-point-out-",
                "label": "Sarcastically point out their own failures to the group.",
                "mentor": "By striking out, you expose your own flank. Now two people look like fools instead of one.",
                "consequence": "Management views you both as toxic assets. Both of you are passed over for the promotion in favor of a quieter peer.",
                "xp": 40,
                "impact": {
                  "communication": -5
                },
                "trait": "-Professionalism"
              },
              {
                "id": "ignore-the-email-and-sch",
                "label": "Ignore the email and schedule a private one-on-one with them.",
                "mentor": "A trap remains a trap, even in a small room. Ensure your shield is up before you speak.",
                "consequence": "The tension remains unresolved. They take your silence as weakness and continue the behavior, though you avoid a public scene.",
                "xp": 130,
                "impact": {
                  "negotiation": 3
                },
                "trait": "+Diplomacy"
              }
            ]
          },
          {
            "id": "artofwar-c4-s1-sc3",
            "title": "The Over-Leveraged Opportunity",
            "setup": "An acquaintance offers you a high-return investment that requires you to take out a second mortgage. The market is volatile, but the 'potential' for wealth is massive.",
            "choices": [
              {
                "id": "decline-and-focus-on-pay",
                "label": "Decline and focus on paying off your existing debts first.",
                "mentor": "Security against defeat is a matter of your own walls. Do not tear them down to build a tower on sand.",
                "consequence": "The market crashes weeks later. While your acquaintance files for bankruptcy, you are positioned to buy assets at a deep discount.",
                "xp": 290,
                "impact": {
                  "finance": 8
                },
                "trait": "+Discipline"
              },
              {
                "id": "invest-half-of-your-emer",
                "label": "Invest half of your emergency savings into the venture.",
                "mentor": "To be 'mostly' safe is to be vulnerable. A half-closed gate is still an open gate.",
                "consequence": "The investment yields slow returns, but a sudden medical bill causes you significant stress due to your lowered cash reserves.",
                "xp": 110,
                "impact": {
                  "mindset": 2
                },
                "trait": "+Risk-Taking"
              },
              {
                "id": "go-all-in-to-reach-finan",
                "label": "Go all in to reach financial freedom faster.",
                "mentor": "The foolish general chases the bait and finds the hook. You have defeated yourself before the enemy even arrived.",
                "consequence": "The venture fails completely. You lose your home and spend the next decade recovering from a single week of greed.",
                "xp": 45,
                "impact": {
                  "strategy": -6
                },
                "trait": "-Judgment"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c4-s1-rf1",
            "prompt": "In which area of your life—finances, health, or career—are you currently most vulnerable to a single bad stroke of luck, and what is one 'brick' you can lay today to fortify it?"
          },
          {
            "id": "artofwar-c4-s1-rf2",
            "prompt": "Describe a time you rushed to 'attack' a problem or person, only to realize later that you had exposed your own weaknesses in the process. What would 'waiting for the opening' have looked like?"
          }
        ]
      },
      {
        "id": "artofwar-c4-s2",
        "title": "The Power of Measurement",
        "principle": "Use calculation of space and quantity to guarantee a crushing physical superiority at the point of impact.",
        "scenarios": [
          {
            "id": "artofwar-c4-s2-sc1",
            "title": "The Logistics of Growth",
            "setup": "You are expanding your small boutique agency into a new, aggressive market. You have limited capital and must decide how to distribute your personnel and budget to capture the flagship client.",
            "choices": [
              {
                "id": "overwhelm-the-niche-with",
                "label": "Overwhelm the niche with triple the required resources.",
                "mentor": "The skilled general calculates space. Use a hammer to crack a nut so that no nut remains to challenge you.",
                "consequence": "You secure the client instantly; your reputation for dominance prevents competitors from even bidding against you.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Strategic Depth"
              },
              {
                "id": "split-resources-evenly-a",
                "label": "Split resources evenly across three different leads.",
                "mentor": "To be everywhere is to be nowhere. You have measured the field and chosen to be thin in every corner.",
                "consequence": "You are undervalued in all three pitches; you lose the flagship and drain your operational reserves.",
                "xp": 50,
                "impact": {
                  "discipline": -4
                },
                "trait": "-Focus"
              },
              {
                "id": "match-the-leading-compet",
                "label": "Match the leading competitor's budget exactly.",
                "mentor": "Parity is a gamble, not a strategy. Why leave the outcome to the whims of a coin toss?",
                "consequence": "You enter a grueling war of attrition that narrows your profit margins to almost zero.",
                "xp": 120,
                "impact": {
                  "finance": 2
                },
                "trait": "+Observation"
              }
            ]
          },
          {
            "id": "artofwar-c4-s2-sc2",
            "title": "The Calendar War",
            "setup": "A critical certification exam and a high-stakes work project fall in the same week. You have forty available hours to allocate before the 'impact' of the deadline hitting.",
            "choices": [
              {
                "id": "take-unpaid-leave-to-foc",
                "label": "Take unpaid leave to focus entirely on the exam.",
                "mentor": "Measurement of time is measurement of ground. Secure the height first; the valley will still be there tomorrow.",
                "consequence": "You ace the exam and gain a permanent salary floor, making the temporary loss of pay irrelevant.",
                "xp": 250,
                "impact": {
                  "mindset": 7
                },
                "trait": "+Prioritization"
              },
              {
                "id": "pull-all-nighters-to-giv",
                "label": "Pull all-nighters to give 100% to both tasks.",
                "mentor": "An exhausted soldier cannot measure his own shadow. You invite defeat through the friction of fatigue.",
                "consequence": "Health collapse leads to a failure in the exam and a sloppy, error-ridden work project.",
                "xp": 45,
                "impact": {
                  "emotionalControl": -5
                },
                "trait": "-Vitality"
              },
              {
                "id": "delegate-minor-project-t",
                "label": "Delegate minor project tasks to colleagues to free up ten hours.",
                "mentor": "You lighten the pack, but you still walk into a storm. You have measured the weight, but not the wind.",
                "consequence": "You pass the exam narrowly, but your colleagues now hold social leverage over your next promotion.",
                "xp": 150,
                "impact": {
                  "leadership": 3
                },
                "trait": "+Delegation"
              }
            ]
          },
          {
            "id": "artofwar-c4-s2-sc3",
            "title": "The Negotiation Table",
            "setup": "You are selling your car. A buyer arrives with cash, but they are $2,000 short of your firm price, citing minor scratches you hadn't noticed.",
            "choices": [
              {
                "id": "walk-away-immediately-an",
                "label": "Walk away immediately and wait for a prepared buyer.",
                "mentor": "If the numbers do not favor you, do not engage. The unassailable state is refusing to play a losing game.",
                "consequence": "You find a buyer the next day who pays the full price, having maintained your position of strength.",
                "xp": 220,
                "impact": {
                  "negotiation": 6
                },
                "trait": "+Conviction"
              },
              {
                "id": "accept-the-offer-to-win-",
                "label": "Accept the offer to 'win' the sale today.",
                "mentor": "The enemy provided the opportunity for your defeat, and you took it. You measured your own impatience, not the value.",
                "consequence": "You lose significant equity and feel a lingering resentment that clouds your next financial decision.",
                "xp": 60,
                "impact": {
                  "finance": -6
                },
                "trait": "-Financial IQ"
              },
              {
                "id": "offer-a-500-discount-for",
                "label": "Offer a $500 discount for an immediate close.",
                "mentor": "A compromise is often just a slow surrendering of the field. Is the speed worth the terrain lost?",
                "consequence": "The sale is done, but the buyer realizes you are flexible and pushes for the spare tires for free as well.",
                "xp": 110,
                "impact": {
                  "communication": 2
                },
                "trait": "+Agility"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c4-s2-rf1",
            "prompt": "Identify a 'battle' in your life where you are currently spread too thin. If you moved all those resources to a single point of impact, what would change?"
          },
          {
            "id": "artofwar-c4-s2-rf2",
            "prompt": "Sun Tzu suggests that defeat is a choice we make by being vulnerable. In what area of your personal discipline are you currently providing your 'enemy' an opportunity?"
          }
        ]
      }
    ]
  },
  {
    "id": "artofwar-c5",
    "title": "Energy and Directivity: The Flow of Momentum",
    "summary": "Combine direct and indirect forces to create an unstoppable momentum like water falling from a great height.",
    "sections": [
      {
        "id": "artofwar-c5-s1",
        "title": "Direct and Indirect Methods",
        "principle": "Use the direct force to engage and the indirect force to secure victory.",
        "scenarios": [
          {
            "id": "artofwar-c5-s1-sc1",
            "title": "The Market Rivalry",
            "setup": "Your competitor is aggressively undercutting your prices to steal your loyal client base. They expect a price war, bracing for a direct frontal assault on their margins.",
            "choices": [
              {
                "id": "match-their-price-cuts-d",
                "label": "Match their price cuts dollar-for-dollar.",
                "mentor": "You follow the enemy into the fire he lit for you. Two exhausted armies only produce a graveyard.",
                "consequence": "Profit margins vanish and your brand value is permanently cheapened in the eyes of consumers.",
                "xp": 50,
                "impact": {
                  "finance": -4
                },
                "trait": "-Finance"
              },
              {
                "id": "maintain-pricing-but-lau",
                "label": "Maintain pricing but launch a secret referral program.",
                "mentor": "Engage them with the familiar while you strike where they are hollow. They watch the front gate; you enter through the windows.",
                "consequence": "The public face remains stable while a surge of new, high-value clients arrives via private channels.",
                "xp": 280,
                "impact": {
                  "strategy": 7
                },
                "trait": "+Strategy"
              },
              {
                "id": "publicly-critique-their-",
                "label": "Publicly critique their product quality.",
                "mentor": "Muddying the water makes you dirty as well. You distract the enemy, but fail to advance your own position.",
                "consequence": "You damage their reputation, but the public sees the industry as petty and unprofessional.",
                "xp": 120,
                "impact": {
                  "communication": 2
                },
                "trait": "-Communication"
              }
            ]
          },
          {
            "id": "artofwar-c5-s1-sc2",
            "title": "The Promotion Vacuum",
            "setup": "A senior leadership position is open, and every candidate is boasting about their metrics in high-profile meetings. The air is thick with blatant self-promotion and ego.",
            "choices": [
              {
                "id": "work-late-and-let-your-p",
                "label": "Work late and let your performance numbers speak for themselves.",
                "mentor": "Direct weight is necessary, but the unseen hand guides the heavy stone. Merit alone is a silent ghost.",
                "consequence": "You are respected as a worker but overlooked for the leadership role due to lack of visibility.",
                "xp": 140,
                "impact": {
                  "discipline": 3
                },
                "trait": "+Discipline"
              },
              {
                "id": "interrupt-a-meeting-to-h",
                "label": "Interrupt a meeting to highlight a rival's failure.",
                "mentor": "To strike blindly is to show your own throat. You have revealed your fear, not your strength.",
                "consequence": "The board views you as toxic and untrustworthy, ending your chances for advancement.",
                "xp": 40,
                "impact": {
                  "leadership": -5
                },
                "trait": "-Leadership"
              },
              {
                "id": "perform-your-duties-publ",
                "label": "Perform your duties publicly while privately mentoring the CEO's favorite junior.",
                "mentor": "The direct force meets the eye; the indirect force captures the heart. You become indispensable through the shadows.",
                "consequence": "You maintain high output while building an alliance that makes your promotion a foregone conclusion.",
                "xp": 295,
                "impact": {
                  "negotiation": 8
                },
                "trait": "+Negotiation"
              }
            ]
          },
          {
            "id": "artofwar-c5-s1-sc3",
            "title": "The Stalled Negotiation",
            "setup": "You are trying to buy a property, but the seller is stubborn on an inflated price. Standard bargaining tactics have reached a total stalemate.",
            "choices": [
              {
                "id": "walk-away-and-wait-for-t",
                "label": "Walk away and wait for them to call you back.",
                "mentor": "Withdrawal is a tool, but if the enemy does not chase, you have simply lost the ground.",
                "consequence": "The seller might panic, but there is a high risk they sell to a more eager buyer instead.",
                "xp": 110,
                "impact": {
                  "stoicism": 2
                },
                "trait": "+Stoicism"
              },
              {
                "id": "offer-a-higher-price-but",
                "label": "Offer a higher price but demand a faster closing date.",
                "mentor": "You surrender your coins for the illusion of speed. This is not victory; it is a paid retreat.",
                "consequence": "You overpay for an asset and start the investment with a significant financial deficit.",
                "xp": 60,
                "impact": {
                  "finance": -3
                },
                "trait": "-Finance"
              },
              {
                "id": "stand-firm-on-price-but-",
                "label": "Stand firm on price but offer to pay for all immediate repairs yourself.",
                "mentor": "The price is the shield they hold high; the repair costs are the soft underbelly. Attack the small to take the large.",
                "consequence": "The seller feels they won a concession, while you secure the property at your target valuation.",
                "xp": 270,
                "impact": {
                  "mindset": 6
                },
                "trait": "+Mindset"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c5-s1-rf1",
            "prompt": "In your current professional or personal goals, what is the 'direct' front everyone expects you to attack, and what is the 'indirect' path you have been ignoring?"
          },
          {
            "id": "artofwar-c5-s1-rf2",
            "prompt": "Think of a time you used sheer force to solve a problem and failed. How could an indirect, lateral move have preserved your energy and secured the win?"
          }
        ]
      },
      {
        "id": "artofwar-c5-s2",
        "title": "The Timing of Momentum",
        "principle": "Energy should be like the bending of a crossbow; the decision like the pulling of a trigger.",
        "scenarios": [
          {
            "id": "artofwar-c5-s2-sc1",
            "title": "The Takeover Bid",
            "setup": "Your rival's company is bleeding market share, and their board is panicked. You have the capital to launch a hostile takeover, but the market is currently volatile and unpredictable.",
            "choices": [
              {
                "id": "strike-immediately-while",
                "label": "Strike immediately while they are weak",
                "mentor": "An arrow loosed without aim finds only the wind. You waste your tension on a moving target.",
                "consequence": "You overpay during a market spike; the debt load cripples your expansion for years.",
                "xp": 50,
                "impact": {
                  "strategy": -4
                },
                "trait": "-Finance"
              },
              {
                "id": "quietly-accumulate-share",
                "label": "Quietly accumulate shares and wait for the quarterly crash",
                "mentor": "The crossbow is bent to its limit. Now, the release is but a feather's weight.",
                "consequence": "You acquire the firm at a 40% discount during the panic, securing total market dominance.",
                "xp": 280,
                "impact": {
                  "finance": 8
                },
                "trait": "+Patience"
              },
              {
                "id": "publicly-announce-your-i",
                "label": "Publicly announce your intent to pressure them",
                "mentor": "You growl before you bite. You have tipped your hand and invited others to the feast.",
                "consequence": "The stock price inflates; you get the company but lose your liquid reserves to a bidding war.",
                "xp": 120,
                "impact": {
                  "negotiation": 2
                },
                "trait": "+Boldness"
              }
            ]
          },
          {
            "id": "artofwar-c5-s2-sc2",
            "title": "The Resignation Speech",
            "setup": "Your toxic manager just took credit for your year-long project in front of the CEO. You have a folder of evidence proving their incompetence and your own results.",
            "choices": [
              {
                "id": "interrupt-the-meeting-to",
                "label": "Interrupt the meeting to expose them immediately",
                "mentor": "A chaotic release lacks force. You appear emotional, and the blow loses its sharpness.",
                "consequence": "You look unprofessional; the CEO views the conflict as a 'personality clash' and ignores your proof.",
                "xp": 45,
                "impact": {
                  "emotionalControl": -5
                },
                "trait": "-Stoicism"
              },
              {
                "id": "wait-for-the-private-per",
                "label": "Wait for the private performance review to present the file",
                "mentor": "The trigger is pulled in silence. This timing ensures the target cannot dodge the bolt.",
                "consequence": "The manager is fired quietly; you are promoted to their position within the month.",
                "xp": 250,
                "impact": {
                  "communication": 7
                },
                "trait": "+Strategy"
              },
              {
                "id": "leak-the-evidence-anonym",
                "label": "Leak the evidence anonymously to the entire office",
                "mentor": "A mist of arrows may hit, but the archer remains in the shadows, unhonored.",
                "consequence": "The manager falls, but a culture of suspicion takes root, making your future leadership harder.",
                "xp": 110,
                "impact": {
                  "leadership": 1
                },
                "trait": "-Integrity"
              }
            ]
          },
          {
            "id": "artofwar-c5-s2-sc3",
            "title": "The Viral Launch",
            "setup": "Your new app is ready, but a major celebrity just dominated the news cycle with a massive scandal. Your marketing team is split on whether to pivot or push forward.",
            "choices": [
              {
                "id": "launch-now-to-capitalize",
                "label": "Launch now to capitalize on the high internet traffic",
                "mentor": "To fire into a thunderstorm is to lose your bolt to the clouds. Wait for the sky to clear.",
                "consequence": "Your launch is buried by scandal news; your acquisition cost triples as you fight for attention.",
                "xp": 60,
                "impact": {
                  "mindset": -3
                },
                "trait": "-Focus"
              },
              {
                "id": "delay-launch-until-the-n",
                "label": "Delay launch until the news cycle reaches a lull",
                "mentor": "The bow is drawn. When the world grows quiet, your release will sound like a thunderclap.",
                "consequence": "You hit #1 on the App Store during a slow news week, gaining massive organic reach.",
                "xp": 290,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Discipline"
              },
              {
                "id": "buy-ads-specifically-tar",
                "label": "Buy ads specifically targeting the scandal's hashtags",
                "mentor": "You attempt to ride the dragon's tail. A dangerous momentum that may burn you.",
                "consequence": "Brief high traffic, but low retention as users are distracted by the ongoing drama.",
                "xp": 135,
                "impact": {
                  "finance": 3
                },
                "trait": "+Opportunism"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c5-s2-rf1",
            "prompt": "Identify a 'trigger' in your life you are currently rushing. What would happen if you held the tension for one more week?"
          },
          {
            "id": "artofwar-c5-s2-rf2",
            "prompt": "When in your past did you act out of 'release' rather than 'timing'? How did the lack of precision change the outcome?"
          }
        ]
      }
    ]
  },
  {
    "id": "artofwar-c6",
    "title": "Weak Points and Strong: dictating the Engagement",
    "summary": "Force the enemy to adapt to you by appearing where they must hasten to defend.",
    "sections": [
      {
        "id": "artofwar-c6-s1",
        "title": "The Initiative",
        "principle": "The clever combatant imposes his will on the enemy but does not allow the enemy's will to be imposed on him.",
        "scenarios": [
          {
            "id": "artofwar-c6-s1-sc1",
            "title": "The Calendar Conflict",
            "setup": "Your competitive colleague schedules a 'urgent' project update during your focused deep-work time. They are trying to force you into a reactive state while you are unprepared.",
            "choices": [
              {
                "id": "decline-the-meeting-and-",
                "label": "Decline the meeting and propose a time where you hold the data.",
                "mentor": "He who occupies the field first awaits the enemy at ease. Control the clock, or be consumed by it.",
                "consequence": "You finish your work ahead of schedule and enter the meeting with superior leverage.",
                "xp": 250,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Dominance"
              },
              {
                "id": "accept-the-meeting-but-m",
                "label": "Accept the meeting but multitask to show you are busy.",
                "mentor": "A man with two destinations reaches neither. You are present in body, but your spirit is already defeated.",
                "consequence": "The colleague notices your distraction and uses it to paint you as disorganized.",
                "xp": 120,
                "impact": {
                  "discipline": 2
                },
                "trait": "-Focus"
              },
              {
                "id": "drop-everything-and-rush",
                "label": "Drop everything and rush to the meeting to prove your flexibility.",
                "mentor": "You hasten to defend a point that was not under attack. You have allowed their urgency to become your master.",
                "consequence": "Your primary project falls behind, and the colleague now knows they can disrupt you at will.",
                "xp": 45,
                "impact": {
                  "emotionalControl": -5
                },
                "trait": "-Authority"
              }
            ]
          },
          {
            "id": "artofwar-c6-s1-sc2",
            "title": "Market Turbulence",
            "setup": "A rival business slashes prices, attempting to bait you into a margin-killing price war. The industry is watching to see if you will flinch and follow their lead.",
            "choices": [
              {
                "id": "double-down-on-premium-f",
                "label": "Double down on premium features they cannot replicate.",
                "mentor": "Appear where they cannot go. Force them to defend their cheapness against your excellence.",
                "consequence": "High-value clients migrate to you for quality, rendering the rival's discount irrelevant.",
                "xp": 280,
                "impact": {
                  "finance": 7
                },
                "trait": "+Vision"
              },
              {
                "id": "maintain-current-prices-",
                "label": "Maintain current prices and launch a marketing blitz.",
                "mentor": "Movement without a strike is merely noise. Ensure your shouting has a purpose.",
                "consequence": "Brand awareness increases, but your sales volume remains stagnant in the short term.",
                "xp": 150,
                "impact": {
                  "communication": 3
                },
                "trait": "+Persistence"
              },
              {
                "id": "match-their-price-immedi",
                "label": "Match their price immediately to prevent losing customers.",
                "mentor": "You dance to their flute. When the enemy dictates the price, he dictates your bankruptcy.",
                "consequence": "Profits vanish and your brand is now perceived as a cheap commodity.",
                "xp": 50,
                "impact": {
                  "negotiation": -6
                },
                "trait": "-Value"
              }
            ]
          },
          {
            "id": "artofwar-c6-s1-sc3",
            "title": "The Family Feud",
            "setup": "A relative brings up a sensitive past mistake at a holiday dinner, trying to provoke an emotional outburst. Everyone at the table is waiting for your defensive response.",
            "choices": [
              {
                "id": "acknowledge-the-point-br",
                "label": "Acknowledge the point briefly, then move the topic to their upcoming goals.",
                "mentor": "Direct the flow of the river. By refusing the bait, you expose the fisherman.",
                "consequence": "The aggressor looks petty while you appear mature and in control of the room.",
                "xp": 220,
                "impact": {
                  "emotionalControl": 6
                },
                "trait": "+Poise"
              },
              {
                "id": "ignore-them-completely-a",
                "label": "Ignore them completely and talk to the person next to you.",
                "mentor": "Silence is a shield, but a visible wall invites a siege. Be careful of your flanks.",
                "consequence": "The tension remains high, but you avoid a direct shouting match.",
                "xp": 100,
                "impact": {
                  "stoicism": 2
                },
                "trait": "+Stoicism"
              },
              {
                "id": "defend-your-past-actions",
                "label": "Defend your past actions with a detailed list of excuses.",
                "mentor": "To explain is to bleed. You have allowed them to pick the ground on which you fight.",
                "consequence": "The dinner devolves into an argument you cannot win, and your reputation suffers.",
                "xp": 40,
                "impact": {
                  "confidence": -4
                },
                "trait": "-Temper"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c6-s1-rf1",
            "prompt": "Identify a person in your life who currently 'dictates the engagement'—how would your daily stress change if you stopped reacting to their moves and started making your own?"
          },
          {
            "id": "artofwar-c6-s1-rf2",
            "prompt": "Recall a time you were lured into an argument or a purchase you didn't want. What was the 'bait' they used to make you lose your initiative?"
          }
        ]
      },
      {
        "id": "artofwar-c6-s2",
        "title": "Formlessness",
        "principle": "By discovering the enemy's dispositions while remaining invisible, you keep your forces concentrated while theirs are dispersed.",
        "scenarios": [
          {
            "id": "artofwar-c6-s2-sc1",
            "title": "The Silent Competitor",
            "setup": "You are launching a boutique marketing agency in a crowded market dominated by a loud, aggressive firm. They are currently overspending on billboards and radio spots to drown you out, assuming you will match their tactics. You need to secure your first major client without triggering a bidding war you can't win.",
            "choices": [
              {
                "id": "directly-undercut-their-",
                "label": "Directly undercut their public pricing",
                "mentor": "You show your blade too early and invite a heavy counter-strike. Why invite a giant to step on you?",
                "consequence": "The rival slashes prices further, depleting your small cash reserves and forcing a pivot.",
                "xp": 45,
                "impact": {
                  "finance": -4
                },
                "trait": "-Finance"
              },
              {
                "id": "niche-down-into-an-indus",
                "label": "Niche down into an industry they ignore",
                "mentor": "Water takes the shape of the vessel. By occupying the void they left, you grow strong while they guard nothing.",
                "consequence": "You secure a loyal client base in a specialized sector while the rival wastes money on general ads.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Strategy"
              },
              {
                "id": "mimic-their-branding-to-",
                "label": "Mimic their branding to confuse clients",
                "mentor": "To wear another's mask is to lose your own face. You confuse the enemy, but you also confuse the market.",
                "consequence": "You gain some traffic but face a legal threat and a reputation for being unoriginal.",
                "xp": 120,
                "impact": {
                  "mindset": 1
                },
                "trait": "-Confidence"
              }
            ]
          },
          {
            "id": "artofwar-c6-s2-sc2",
            "title": "The Office Cold War",
            "setup": "A colleague is trying to undermine your new project by hoarding data and spreading rumors about your 'lack of transparency.' They are waiting for you to complain to the boss so they can frame you as emotional and difficult to work with.",
            "choices": [
              {
                "id": "confront-them-in-the-wee",
                "label": "Confront them in the weekly meeting",
                "mentor": "You walk into a prepared snare. Anger is a predictable shape; the enemy will use it to pin you down.",
                "consequence": "The boss perceives you as the source of friction, and your colleague plays the victim perfectly.",
                "xp": 50,
                "impact": {
                  "emotionalControl": -5
                },
                "trait": "-EmotionalControl"
              },
              {
                "id": "quietly-move-the-project",
                "label": "Quietly move the project to a shared cloud they can't access",
                "mentor": "You have built a wall, but walls can be climbed. You are still visible, merely behind a fence.",
                "consequence": "The colleague is temporarily blocked but escalates their rumors to higher management.",
                "xp": 150,
                "impact": {
                  "discipline": 3
                },
                "trait": "+Discipline"
              },
              {
                "id": "ask-them-for-help-on-a-t",
                "label": "Ask them for help on a tiny, irrelevant detail",
                "mentor": "Give them a shadow to chase. While they focus on the trifle you provided, your real work remains unseen and ahead of schedule.",
                "consequence": "They feel in control while distracted, allowing you to complete the project without any further interference.",
                "xp": 290,
                "impact": {
                  "leadership": 7
                },
                "trait": "+Strategy"
              }
            ]
          },
          {
            "id": "artofwar-c6-s2-sc3",
            "title": "Social Net Worth",
            "setup": "A former friend has started excluding you from social circles and airing your past mistakes to mutual acquaintances. They are baiting you into a public argument to prove your 'reputation' is deserved.",
            "choices": [
              {
                "id": "release-a-public-stateme",
                "label": "Release a public statement or post to clear your name",
                "mentor": "You surrender your formlessness to defend a ghost. Now everyone knows exactly where to strike you.",
                "consequence": "The drama goes viral, alienating neutral friends and making you look desperate.",
                "xp": 60,
                "impact": {
                  "communication": -3
                },
                "trait": "-Communication"
              },
              {
                "id": "ignore-it-and-focus-on-h",
                "label": "Ignore it and focus on high-value new connections",
                "mentor": "Be like the wind; they cannot strike what they cannot find. Your silence is a vacuum that exhausts their malice.",
                "consequence": "The former friend looks obsessed and petty while your new status makes the old rumors irrelevant.",
                "xp": 275,
                "impact": {
                  "stoicism": 8
                },
                "trait": "+Stoicism"
              },
              {
                "id": "politely-ask-mutual-frie",
                "label": "Politely ask mutual friends to mediate",
                "mentor": "Involving others multiplies the points of failure. You have dispersed your own defense into the hands of the weak.",
                "consequence": "Friends feel pressured and choose sides, causing a permanent rift in the entire social group.",
                "xp": 110,
                "impact": {
                  "negotiation": 2
                },
                "trait": "-Negotiation"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c6-s2-rf1",
            "prompt": "When in your life do you feel the most 'exposed' to others' opinions, and how would becoming 'formless' in that area protect your energy?"
          },
          {
            "id": "artofwar-c6-s2-rf2",
            "prompt": "Think of a current goal. If you stopped talking about it entirely, how would that force your 'competitors'—or even your own doubts—to work harder to stop you?"
          }
        ]
      }
    ]
  },
  {
    "id": "artofwar-c7",
    "title": "Intelligence and Vision: The Use of Spies",
    "summary": "Foreknowledge cannot be elicited from spirits; it must be obtained from people who know the enemy.",
    "sections": [
      {
        "id": "artofwar-c7-s1",
        "title": "The Value of Insight",
        "principle": "What enables the wise sovereign to achieve things beyond the reach of ordinary men is foreknowledge.",
        "scenarios": [
          {
            "id": "artofwar-c7-s1-sc1",
            "title": "The Market Disruptor",
            "setup": "A rival startup is rumored to be pivoting their product, which could render your current project obsolete. Your team suggests doubling down on marketing to drown them out, but your budget is tightening.",
            "choices": [
              {
                "id": "hire-a-consultant-who-re",
                "label": "Hire a consultant who recently left the rival's executive team",
                "mentor": "The wise general captures the plans before the soldiers. Data is the only compass in a storm.",
                "consequence": "You pivot before the market shifts, saving months of wasted development and securing a lead.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Strategic Insight"
              },
              {
                "id": "launch-a-massive-loyalty",
                "label": "Launch a massive 'loyalty' campaign to lock in current users",
                "mentor": "You build a wall while the enemy builds a tunnel. Safety is an illusion when you are blind.",
                "consequence": "User retention stays steady temporarily, but you are blindsided when the rival releases a superior technology.",
                "xp": 120,
                "impact": {
                  "finance": 2
                },
                "trait": "+Marketing"
              },
              {
                "id": "ignore-the-rumors-and-fo",
                "label": "Ignore the rumors and focus on 'perfecting' your existing vision",
                "mentor": "To move without eyes is to walk off a cliff. Purity of vision is no shield against the blade of reality.",
                "consequence": "You release a product that nobody wants anymore. Your investors withdraw support due to your lack of adaptability.",
                "xp": 45,
                "impact": {
                  "mindset": -5
                },
                "trait": "-Adaptability"
              }
            ]
          },
          {
            "id": "artofwar-c7-s1-sc2",
            "title": "The Promotion Mystery",
            "setup": "Your manager is unusually quiet about an upcoming departmental restructuring. You have the option to stay late and work harder, or take an old colleague from HR out for lunch.",
            "choices": [
              {
                "id": "treat-the-hr-colleague-t",
                "label": "Treat the HR colleague to lunch and listen for structural shifts",
                "mentor": "Foreknowledge is not a gift from ghosts. It is bought with time and silver among the informed.",
                "consequence": "You learn your department is being dissolved and apply for an opening in the new 'Growth' wing immediately.",
                "xp": 250,
                "impact": {
                  "communication": 7
                },
                "trait": "+Networking"
              },
              {
                "id": "increase-your-output-to-",
                "label": "Increase your output to prove you are indispensable",
                "mentor": "Hard work is a blunt tool. Why sharpen the axe when the forest is already sold?",
                "consequence": "You are the most productive person in a dying division; you are eventually laid off despite your high metrics.",
                "xp": 100,
                "impact": {
                  "discipline": 1
                },
                "trait": "+Work Ethic"
              },
              {
                "id": "wait-for-the-official-to",
                "label": "Wait for the official town hall announcement to react",
                "mentor": "The sheep waits for the shepherd's whistle, but the shepherd serves the butcher.",
                "consequence": "By the time the news is public, all the best internal transfer spots are taken by those who knew earlier.",
                "xp": 50,
                "impact": {
                  "leadership": -4
                },
                "trait": "-Proactivity"
              }
            ]
          },
          {
            "id": "artofwar-c7-s1-sc3",
            "title": "The Real Estate Gamble",
            "setup": "You are looking to buy a home in a 'up-and-coming' neighborhood. The agent promises high growth, but you notice several 'For Sale' signs from long-term residents.",
            "choices": [
              {
                "id": "knock-on-doors-and-ask-t",
                "label": "Knock on doors and ask the neighbors why they are leaving",
                "mentor": "The ground speaks to those who kneel. One local voice is worth ten painted brochures.",
                "consequence": "You discover a major industrial zoning change is coming next year and avoid a massive financial loss.",
                "xp": 290,
                "impact": {
                  "negotiation": 8
                },
                "trait": "+Critical Thinking"
              },
              {
                "id": "trust-the-real-estate-ag",
                "label": "Trust the real estate agent's data and market projections",
                "mentor": "Never ask the barber if you need a haircut. His truth is shaped by his commission.",
                "consequence": "You buy the house, but its value stagnates while other neighborhoods soar due to hidden environmental issues.",
                "xp": 110,
                "impact": {
                  "finance": -1
                },
                "trait": "-Finance"
              },
              {
                "id": "buy-the-property-based-o",
                "label": "Buy the property based on your 'gut feeling' and aesthetics",
                "mentor": "Intuition is the refuge of the lazy. Foreknowledge requires the labor of investigation.",
                "consequence": "Construction begins on a loud highway bypass nearby a month after you move in, destroying your peace of mind.",
                "xp": 40,
                "impact": {
                  "emotionalControl": -6
                },
                "trait": "-Risk Management"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c7-s1-rf1",
            "prompt": "Recall a time you were blindsided by a change in your work or social life. What piece of information, if known a week earlier, would have changed your response?"
          },
          {
            "id": "artofwar-c7-s1-rf2",
            "prompt": "In your current biggest goal, who is 'the person who knows'—the one who possesses the ground-level insight you are currently guessing at?"
          }
        ]
      },
      {
        "id": "artofwar-c7-s2",
        "title": "The Five Classes of Spies",
        "principle": "Maintain a diverse network of information to ensure that no secret of the opponent remains hidden.",
        "scenarios": [
          {
            "id": "artofwar-c7-s2-sc1",
            "title": "The Glass Ceiling Boardroom",
            "setup": "Your company is planning a massive restructuring, and rumors of layoffs are circulating. To protect your department, you need to know exactly which metrics the CEO is currently prioritizing before the next meeting.",
            "choices": [
              {
                "id": "befriend-the-ceo-s-execu",
                "label": "Befriend the CEO's executive assistant and the night-shift security lead.",
                "mentor": "The door is bolted, but the hinges are loose. Those who are invisible see what is hidden in plain sight.",
                "consequence": "You learn the CEO is obsessed with 'operational lean' cycles, allowing you to reframe your team's value early.",
                "xp": 280,
                "impact": {
                  "strategy": 8
                },
                "trait": "+Observation"
              },
              {
                "id": "ask-your-direct-supervis",
                "label": "Ask your direct supervisor for a transparent update on the company's health.",
                "mentor": "A man asked to reveal his own weakness will only show you his armor. You seek water from a dry well.",
                "consequence": "You receive a canned corporate response that leaves you unprepared for the coming budget cuts.",
                "xp": 120,
                "impact": {
                  "communication": 2
                },
                "trait": "+Patience"
              },
              {
                "id": "confront-the-ceo-directl",
                "label": "Confront the CEO directly during a public Q&A about the rumors.",
                "mentor": "A general who screams into the wind only loses his breath. You have signaled your fear to the enemy.",
                "consequence": "You are marked as a liability and excluded from all future high-level strategy briefings.",
                "xp": 45,
                "impact": {
                  "emotionalControl": -5
                },
                "trait": "-Tact"
              }
            ]
          },
          {
            "id": "artofwar-c7-s2-sc2",
            "title": "The Rival Product Launch",
            "setup": "A competitor is launching a product that could render yours obsolete. You need to know their technical specs, but their headquarters is a fortress of NDAs.",
            "choices": [
              {
                "id": "hire-a-disgruntled-forme",
                "label": "Hire a disgruntled former engineer from their team as a consultant.",
                "mentor": "The 'Inward Spy' knows the cracks in the foundation. Bitter tea still provides clarity.",
                "consequence": "You identify a critical flaw in their cooling system and pivot your marketing to highlight your own stability.",
                "xp": 250,
                "impact": {
                  "negotiation": 7
                },
                "trait": "+Resourcefulness"
              },
              {
                "id": "scour-social-media-posts",
                "label": "Scour social media posts from their junior developers for clues.",
                "mentor": "Gleanings from the field are thin. You see the shadow, but not the man casting it.",
                "consequence": "You find vague hints that help you guess the launch date, but the technical specs remain a mystery.",
                "xp": 110,
                "impact": {
                  "strategy": 3
                },
                "trait": "+Analysis"
              },
              {
                "id": "wait-for-the-official-pr",
                "label": "Wait for the official press release to study their claims.",
                "mentor": "To wait for the dragon to roar is to wait for your own funeral. You are reacting, not ruling.",
                "consequence": "The product catches you off guard, and you lose 15% market share within the first month.",
                "xp": 50,
                "impact": {
                  "mindset": -4
                },
                "trait": "-Foresight"
              }
            ]
          },
          {
            "id": "artofwar-c7-s2-sc3",
            "title": "The Social Gambit",
            "setup": "You are entering a high-stakes negotiation for a property purchase. The seller seems firm on price, but you suspect their financial situation is more desperate than they let on.",
            "choices": [
              {
                "id": "listen-to-local-gossip-a",
                "label": "Listen to local gossip at a nearby pub and talk to the neighbors.",
                "mentor": "Local spies are the roots of the tree. They drink the ground's secrets long before the branches know.",
                "consequence": "You discover the seller is facing a tax lien, giving you the leverage to offer 20% below asking.",
                "xp": 220,
                "impact": {
                  "finance": 6
                },
                "trait": "+SocialIntelligence"
              },
              {
                "id": "hire-a-private-investiga",
                "label": "Hire a private investigator to run a background check.",
                "mentor": "Expensive eyes often see only what is on paper. You have traded your gold for ink.",
                "consequence": "You get a standard report that confirms their identity but misses the emotional urgency of the sale.",
                "xp": 130,
                "impact": {
                  "discipline": 2
                },
                "trait": "+Efficiency"
              },
              {
                "id": "try-to-bluff-the-seller-",
                "label": "Try to bluff the seller by claiming you have other properties lined up.",
                "mentor": "A false sword breaks against a real shield. Without knowledge, your words are hollow echoes.",
                "consequence": "The seller calls your bluff, raises the asking price, and refuses further negotiations with you.",
                "xp": 40,
                "impact": {
                  "confidence": -6
                },
                "trait": "-Integrity"
              }
            ]
          }
        ],
        "reflections": [
          {
            "id": "artofwar-c7-s2-rf1",
            "prompt": "Who in your current social or professional circle sees the 'engine room' that you typically overlook? How could you better value their perspective?"
          },
          {
            "id": "artofwar-c7-s2-rf2",
            "prompt": "Consider a recent failure. What piece of information, if known beforehand, would have changed your decision? Why was that information hidden from you?"
          }
        ]
      }
    ]
  }
];
