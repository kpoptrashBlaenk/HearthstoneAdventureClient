import { CARD_SET_ID, CARD_TYPE_ID, CLASSES, FACTION_ID, KEYWORD_ID, MINION_TYPE_ID, SPELL_SCHOOL_ID } from './constants'

export const BUCKETS = {
  ALL: {
    ALL: { params: [], classes: null },
  },
  KEYWORD_IDS: {
    TAUNT: {
      params: [{ key: 'keywordIds', value: KEYWORD_ID.TAUNT }],
      classes: [
        CLASSES.DEATH_KNIGHT.id,
        CLASSES.DRUID.id,
        CLASSES.PALADIN.id,
        CLASSES.PRIEST.id,
        CLASSES.SHAMAN.id,
        CLASSES.WARLOCK.id,
        CLASSES.WARRIOR.id,
      ],
    },
    SPELL_DAMAGE: {
      params: [
        { key: 'keywordIds', value: KEYWORD_ID.SPELL_DAMAGE },
        { key: 'keywordIds', value: KEYWORD_ID.FIRE_SPELL_DAMAGE },
      ],
      classes: [CLASSES.DRUID.id, CLASSES.MAGE.id, CLASSES.SHAMAN.id],
    },
    DIVINE_SHIELD: { params: [{ key: 'keywordIds', value: KEYWORD_ID.DIVINE_SHIELD }], classes: [CLASSES.PALADIN.id] },
    SECRET: { params: [{ key: 'keywordIds', value: KEYWORD_ID.SECRET }], classes: [CLASSES.HUNTER.id, CLASSES.MAGE.id] },
    STEALTH: { params: [{ key: 'keywordIds', value: KEYWORD_ID.STEALTH }], classes: [CLASSES.ROGUE.id] },
    BATTLECRY: { params: [{ key: 'keywordIds', value: KEYWORD_ID.BATTLECRY }], classes: null },
    FREEZE: { params: [{ key: 'keywordIds', value: KEYWORD_ID.FREEZE }], classes: [CLASSES.DEATH_KNIGHT.id, CLASSES.MAGE.id] },
    DEATHRATTLE: { params: [{ key: 'keywordIds', value: KEYWORD_ID.DEATHRATTLE }], classes: null },
    COMBO: { params: [{ key: 'keywordIds', value: KEYWORD_ID.COMBO }], classes: [CLASSES.ROGUE.id] },
    OVERLOAD: { params: [{ key: 'keywordIds', value: KEYWORD_ID.OVERLOAD }], classes: [CLASSES.SHAMAN.id] },
    DISCOVER: { params: [{ key: 'keywordIds', value: KEYWORD_ID.DISCOVER }], classes: null },
    QUEST: { params: [{ key: 'keywordIds', value: KEYWORD_ID.QUEST }], classes: null },
    LIFESTEAL: {
      params: [{ key: 'keywordIds', value: KEYWORD_ID.LIFESTEAL }],
      classes: [CLASSES.DEATH_KNIGHT.id, CLASSES.PALADIN.id, CLASSES.PRIEST.id, CLASSES.WARLOCK.id, CLASSES.DEMON_HUNTER.id],
    },
    RUSH: {
      params: [{ key: 'keywordIds', value: KEYWORD_ID.RUSH }],
      classes: [CLASSES.DEATH_KNIGHT.id, CLASSES.DRUID.id, CLASSES.HUNTER.id, CLASSES.PALADIN.id, CLASSES.DEMON_HUNTER.id],
    },
    REBORN: { params: [{ key: 'keywordIds', value: KEYWORD_ID.REBORN }], classes: [CLASSES.DEATH_KNIGHT.id] },
    OUTCAST: {
      params: [
        { key: 'keywordIds', value: KEYWORD_ID.OUTCAST },
        { key: 'text', value: 'left-most' },
        { key: 'text', value: 'right-most' },
      ],
      classes: [CLASSES.DEMON_HUNTER.id],
    },
    SPELLBURST: { params: [{ key: 'keywordIds', value: KEYWORD_ID.SPELLBURST }], classes: null },
    TRADEABLE: { params: [{ key: 'keywordIds', value: KEYWORD_ID.TRADEABLE }], classes: null },
    CORPSE: { params: [{ key: 'keywordIds', value: KEYWORD_ID.CORPSE }], classes: [CLASSES.DEATH_KNIGHT.id] },
    ELUSIVE: { params: [{ key: 'keywordIds', value: KEYWORD_ID.ELUSIVE }], classes: [CLASSES.DRUID.id] },
    MINIATURIZE: {
      params: [
        { key: 'keywordIds', value: KEYWORD_ID.MINIATURIZE },
        { key: 'keywordIds', value: KEYWORD_ID.MINI },
        { key: 'keywordIds', value: KEYWORD_ID.GIGANTIFY },
      ],
      classes: null,
    },
    TOURIST: {
      params: [
        { key: 'keywordIds', value: KEYWORD_ID.ROGUE_TOURIST },
        { key: 'keywordIds', value: KEYWORD_ID.WARLOCK_TOURIST },
        { key: 'keywordIds', value: KEYWORD_ID.DEATH_KNIGHT_TOURIST },
        { key: 'keywordIds', value: KEYWORD_ID.SHAMAN_TOURIST },
        { key: 'keywordIds', value: KEYWORD_ID.DEMON_HUTNER_TOURIST },
        { key: 'keywordIds', value: KEYWORD_ID.PRIEST_TOURIST },
        { key: 'keywordIds', value: KEYWORD_ID.HUNTER_TOURIST },
        { key: 'keywordIds', value: KEYWORD_ID.WARRIOR_TOURIST },
        { key: 'keywordIds', value: KEYWORD_ID.DRUID_TOURIST },
        { key: 'keywordIds', value: KEYWORD_ID.MAGE_TOURIST },
        { key: 'keywordIds', value: KEYWORD_ID.PALADIN_TOURIST },
      ],
      classes: null,
    },
    IMBUE: {
      params: [
        { key: 'keywordIds', value: KEYWORD_ID.IMBUE },
        [
          { key: 'text', value: 'hero' },
          { key: 'text', value: 'power' },
          { key: 'text', value: 'wisp' },
        ],
      ],
      classes: [CLASSES.DRUID.id, CLASSES.HUNTER.id, CLASSES.PALADIN.id, CLASSES.PRIEST.id, CLASSES.ROGUE.id, CLASSES.SHAMAN.id],
    },
    DARK_GIFT: {
      params: [{ key: 'keywordIds', value: KEYWORD_ID.DARK_GIFT }],
      classes: [CLASSES.DEATH_KNIGHT.id, CLASSES.ROGUE.id, CLASSES.WARLOCK.id, CLASSES.WARRIOR.id],
    },
    TEMPORARY: { params: [{ key: 'keywordIds', value: KEYWORD_ID.TEMPORARY }], classes: [CLASSES.WARLOCK.id] },
    STARSHIP: { params: [{ key: 'keywordIds', value: KEYWORD_ID.STARSHIP }], classes: null },
    KINDRED: { params: [{ key: 'keywordIds', value: KEYWORD_ID.KINDRED }], classes: null },
  },

  CARD_SET_IDS: {
    CORE: { params: [{ key: 'cardSetId', value: CARD_SET_ID.CORE }], classes: null },
    WHIZBANGS_WORKSHOP: { params: [{ key: 'cardSetId', value: CARD_SET_ID.WHIZBANGS_WORKSHOP }], classes: null },
    PERILS_IN_PARADISE: { params: [{ key: 'cardSetId', value: CARD_SET_ID.PERILS_IN_PARADISE }], classes: null },
    THE_GREAT_DARK_BEYOND: { params: [{ key: 'cardSetId', value: CARD_SET_ID.THE_GREAT_DARK_BEYOND }], classes: null },
    EVENT: { params: [{ key: 'cardSetId', value: CARD_SET_ID.EVENT }], classes: null },
    INTO_THE_EMERALD_DREAM: { params: [{ key: 'cardSetId', value: CARD_SET_ID.INTO_THE_EMERALD_DREAM }], classes: null },
    THE_LOST_CITY_OF_UNGORO: { params: [{ key: 'cardSetId', value: CARD_SET_ID.THE_LOST_CITY_OF_UNGORO }], classes: null },
  },
  CARD_TYPE_IDS: {
    HERO: {
      params: [
        { key: 'cardTypeId', value: CARD_TYPE_ID.HERO },
        { key: 'text', value: 'hero card' },
      ],
      classes: null,
    },
    MINION: { params: [{ key: 'cardTypeId', value: CARD_TYPE_ID.MINION }], classes: null },
    SPELL: { params: [{ key: 'cardTypeId', value: CARD_TYPE_ID.SPELL }], classes: null },
    WEAPON: {
      params: [
        { key: 'cardTypeId', value: CARD_TYPE_ID.WEAPON },
        { key: 'text', value: 'weapon' },
        { key: 'text', value: 'equip' },
        { key: 'text', value: ['attack', 'hero'] },
      ],
      classes: [
        CLASSES.DEATH_KNIGHT.id,
        CLASSES.HUNTER.id,
        CLASSES.PALADIN.id,
        CLASSES.ROGUE.id,
        CLASSES.WARRIOR.id,
        CLASSES.DEMON_HUNTER.id,
      ],
    },
    LOCATION: {
      params: [
        { key: 'cardTypeId', value: CARD_TYPE_ID.LOCATION },
        { key: 'text', value: 'location' },
      ],
      classes: [CLASSES.DRUID.id, CLASSES.WARLOCK.id],
    },
  },
  SPELL_SCHOOL_IDS: {
    ARCANE: {
      params: [
        { key: 'spellSchoolId', value: SPELL_SCHOOL_ID.ARCANE },
        { key: 'text', value: 'arcane' },
      ],
      classes: [CLASSES.DRUID.id, CLASSES.MAGE.id],
    },
    FIRE: {
      params: [
        { key: 'spellSchoolId', value: SPELL_SCHOOL_ID.FIRE },
        { key: 'text', value: 'fire' },
      ],
      classes: [CLASSES.MAGE.id],
    },
    FROST: {
      params: [
        { key: 'spellSchoolId', value: SPELL_SCHOOL_ID.FROST },
        { key: 'text', value: 'frost' },
      ],
      classes: [CLASSES.DEATH_KNIGHT.id, CLASSES.MAGE.id],
    },
    NATURE: {
      params: [
        { key: 'spellSchoolId', value: SPELL_SCHOOL_ID.NATURE },
        { key: 'text', value: 'nature' },
      ],
      classes: [CLASSES.DRUID.id, CLASSES.SHAMAN.id],
    },
    HOLY: {
      params: [
        { key: 'spellSchoolId', value: SPELL_SCHOOL_ID.HOLY },
        { key: 'text', value: 'holy' },
      ],
      classes: [CLASSES.PALADIN.id, CLASSES.PRIEST.id],
    },
    SHADOW: {
      params: [
        { key: 'spellSchoolId', value: SPELL_SCHOOL_ID.SHADOW },
        { key: 'text', value: 'shadow' },
      ],
      classes: [CLASSES.DEATH_KNIGHT.id, CLASSES.PRIEST.id, CLASSES.WARLOCK.id],
    },
    FEL: {
      params: [
        { key: 'spellSchoolId', value: SPELL_SCHOOL_ID.FEL },
        { key: 'text', value: 'fel' },
      ],
      classes: [CLASSES.WARLOCK.id, CLASSES.DEMON_HUNTER.id],
    },
  },
  MINION_TYPE_IDS: {
    DRAENEI: {
      params: [
        { key: 'minionTypeId', value: MINION_TYPE_ID.DRAENEI },
        { key: 'minionTypeId', value: MINION_TYPE_ID.ALL },
        { key: 'text', value: 'draenei' },
      ],
      classes: [CLASSES.PALADIN.id, CLASSES.PRIEST.id, CLASSES.WARRIOR.id],
    },
    UNDEAD: {
      params: [
        { key: 'minionTypeId', value: MINION_TYPE_ID.UNDEAD },
        { key: 'minionTypeId', value: MINION_TYPE_ID.ALL },
        { key: 'text', value: 'undead' },
      ],
      classes: [CLASSES.DEATH_KNIGHT.id, CLASSES.PRIEST.id],
    },
    MURLOC: {
      params: [
        { key: 'minionTypeId', value: MINION_TYPE_ID.MURLOC },
        { key: 'minionTypeId', value: MINION_TYPE_ID.ALL },
        { key: 'text', value: 'murloc' },
      ],
      classes: [CLASSES.PALADIN.id, CLASSES.SHAMAN.id],
    },
    DEMON: {
      params: [
        { key: 'minionTypeId', value: MINION_TYPE_ID.DEMON },
        { key: 'minionTypeId', value: MINION_TYPE_ID.ALL },
        { key: 'text', value: 'demon' },
      ],
      classes: [CLASSES.WARLOCK.id, CLASSES.DEMON_HUNTER.id],
    },
    MECH: {
      params: [
        { key: 'minionTypeId', value: MINION_TYPE_ID.MECH },
        { key: 'minionTypeId', value: MINION_TYPE_ID.ALL },
        { key: 'text', value: 'mech' },
      ],
      classes: [CLASSES.WARRIOR.id],
    },
    ELEMENTAL: {
      params: [
        { key: 'minionTypeId', value: MINION_TYPE_ID.ELEMENTAL },
        { key: 'minionTypeId', value: MINION_TYPE_ID.ALL },
        { key: 'text', value: 'elemental' },
      ],
      classes: [CLASSES.MAGE.id, CLASSES.SHAMAN.id],
    },
    BEAST: {
      params: [
        { key: 'minionTypeId', value: MINION_TYPE_ID.BEAST },
        { key: 'minionTypeId', value: MINION_TYPE_ID.ALL },
        { key: 'text', value: 'beast' },
      ],
      classes: [CLASSES.DRUID.id, CLASSES.HUNTER.id],
    },
    PIRATE: {
      params: [
        { key: 'minionTypeId', value: MINION_TYPE_ID.PIRATE },
        { key: 'minionTypeId', value: MINION_TYPE_ID.ALL },
        { key: 'text', value: 'pirate' },
      ],
      classes: [CLASSES.ROGUE.id],
    },
    DRAGON: {
      params: [
        { key: 'minionTypeId', value: MINION_TYPE_ID.DRAGON },
        { key: 'minionTypeId', value: MINION_TYPE_ID.ALL },
        { key: 'text', value: 'dragon' },
      ],
      classes: [CLASSES.PALADIN.id, CLASSES.PRIEST.id, CLASSES.WARRIOR.id],
    },
  },
  FACTION_IDS: {
    ZERG: {
      params: [{ key: 'factionId', value: FACTION_ID.ZERG }],
      classes: [CLASSES.DEATH_KNIGHT.id, CLASSES.HUNTER.id, CLASSES.WARLOCK.id, CLASSES.DEMON_HUNTER.id],
    },
    TERRAN: {
      params: [{ key: 'factionId', value: FACTION_ID.TERRAN }],
      classes: [CLASSES.PALADIN.id, CLASSES.SHAMAN.id, CLASSES.WARRIOR.id],
    },
    PROTOSS: {
      params: [{ key: 'factionId', value: FACTION_ID.PROTOSS }],
      classes: [CLASSES.DRUID.id, CLASSES.MAGE.id, CLASSES.PRIEST.id, CLASSES.ROGUE.id],
    },
  },
  CLASSES: {
    DEATH_KNIGHT: { params: [{ key: 'classId', value: CLASSES.DEATH_KNIGHT }], classes: [CLASSES.DEATH_KNIGHT] },
    DEMON_HUNTER: { params: [{ key: 'classId', value: CLASSES.DEMON_HUNTER }], classes: [CLASSES.DEMON_HUNTER] },
    DRUID: { params: [{ key: 'classId', value: CLASSES.DRUID }], classes: [CLASSES.DRUID] },
    HUNTER: { params: [{ key: 'classId', value: CLASSES.HUNTER }], classes: [CLASSES.HUNTER] },
    MAGE: { params: [{ key: 'classId', value: CLASSES.MAGE }], classes: [CLASSES.MAGE] },
    PALADIN: { params: [{ key: 'classId', value: CLASSES.PALADIN }], classes: [CLASSES.PALADIN] },
    PRIEST: { params: [{ key: 'classId', value: CLASSES.PRIEST }], classes: [CLASSES.PRIEST] },
    ROGUE: { params: [{ key: 'classId', value: CLASSES.ROGUE }], classes: [CLASSES.ROGUE] },
    SHAMAN: { params: [{ key: 'classId', value: CLASSES.SHAMAN }], classes: [CLASSES.SHAMAN] },
    WARLOCK: { params: [{ key: 'classId', value: CLASSES.WARLOCK }], classes: [CLASSES.WARLOCK] },
    WARRIOR: { params: [{ key: 'classId', value: CLASSES.WARRIOR }], classes: [CLASSES.WARRIOR] },
    NEUTRAL: { params: [{ key: 'classId', value: CLASSES.NEUTRAL }], classes: [CLASSES.NEUTRAL] },
  },
  CUSTOM: {
    DEAL_DAMAGE: { params: [{ key: 'text', value: ['deal', 'damage'] }], classes: null },
    MANA_CRYSTAL: { params: [{ key: 'text', value: ['mana', 'crystal'] }], classes: [CLASSES.DRUID.id] },
    HEAL: { params: [{ key: 'text', value: ['heal', 'restore'] }], classes: [CLASSES.PRIEST.id] },
    MANA_CHEAT: {
      params: [
        { key: 'text', value: ['cost', 'less'] },
        { key: 'text', value: ['reduce', 'cost'] },
        { key: 'text', value: ['set', 'cost'] },
        { key: 'text', value: ['cost', '5'] },
        { key: 'text', value: ['instead', 'mana'] },
      ],
      classes: null,
    },
    BUFF: {
      params: [
        { key: 'text', value: '+' },
        { key: 'text', value: ['gain', 'attack'] },
        { key: 'text', value: ['give', 'attack'] },
      ],
      classes: [
        CLASSES.DEATH_KNIGHT.id,
        CLASSES.DRUID.id,
        CLASSES.PALADIN.id,
        CLASSES.PRIEST.id,
        CLASSES.SHAMAN.id,
        CLASSES.WARRIOR.id,
      ],
    },
    SHUFFLE_DECK: { params: [{ key: 'text', value: ['shuffle', 'deck'] }], classes: [CLASSES.ROGUE.id, CLASSES.SHAMAN.id] },
    CAST_SPELL: { params: [{ key: 'text', value: ['cast', 'spell'] }], classes: [CLASSES.MAGE.id, CLASSES.PALADIN.id] },
    ARMOR: { params: [{ key: 'text', value: 'armor' }], classes: [CLASSES.DRUID.id, CLASSES.WARRIOR.id] },
    DRAW: { params: [{ key: 'text', value: 'draw' }], classes: null },
    SUMMON: { params: [{ key: 'text', value: 'summon' }], classes: null },
    DIE: { params: [{ key: 'text', value: 'die' }], classes: [CLASSES.DEATH_KNIGHT.id, CLASSES.MAGE.id, CLASSES.WARRIOR.id] },
    FROST_RUNE: {
      params: [
        { key: 'runeCost', value: 'frost' },
        { key: 'text', value: ['frost', 'rune'] },
      ],
      classes: [CLASSES.DEATH_KNIGHT.id],
    },
    UNHOLY_RUNE: {
      params: [
        { key: 'runeCost', value: 'unholy' },
        { key: 'text', value: ['unholy', 'rune'] },
      ],
      classes: [CLASSES.DEATH_KNIGHT.id],
    },
    BLOOD_RUNE: {
      params: [
        { key: 'runeCost', value: 'blood' },
        { key: 'text', value: ['blood', 'rune'] },
      ],
      classes: [CLASSES.DEATH_KNIGHT.id],
    },
    DESTROY: { params: [{ key: 'text', value: 'destroy' }], classes: null },
    DAMAGE_YOUR_HERO: {
      params: [{ key: 'text', value: ['damage', 'your', 'hero'] }],
      classes: [CLASSES.PRIEST.id, CLASSES.WARLOCK.id],
    },
    CREWMATE: { params: [{ key: 'text', value: 'crewmate' }], classes: [CLASSES.DEMON_HUNTER.id] },
    CLASS: {
      params: [
        { key: 'text', value: 'class' },
        { key: 'name', value: 'Nightmare Fuel' },
        { key: 'name', value: 'Merchant of Legend' },
        { key: 'name', value: 'Mimicry' },
      ],
      classes: [CLASSES.ROGUE.id],
    },
    DAMAGED: { params: [{ key: 'text', value: 'damaged' }], classes: [CLASSES.WARRIOR.id] },
    TRANSFORM: { params: [{ key: 'text', value: 'transform' }], classes: [CLASSES.SHAMAN.id] },
    DRINK: {
      params: [{ key: 'text', value: 'drink' }],
      classes: [
        CLASSES.MAGE.id,
        CLASSES.PALADIN.id,
        CLASSES.PRIEST.id,
        CLASSES.SHAMAN.id,
        CLASSES.WARLOCK.id,
        CLASSES.WARRIOR.id,
      ],
    },
    MAP: {
      params: [{ key: 'name', value: 'map' }],
      classes: [
        CLASSES.DEATH_KNIGHT.id,
        CLASSES.HUNTER.id,
        CLASSES.PALADIN.id,
        CLASSES.ROGUE.id,
        CLASSES.SHAMAN.id,
        CLASSES.DEMON_HUNTER.id,
      ],
    },
    SMOLDERING: {
      params: [{ key: 'name', value: 'smoldering' }],
      classes: [CLASSES.MAGE.id, CLASSES.PALADIN.id, CLASSES.PRIEST.id],
    },
    TYPE: { params: [{ key: 'text', value: 'type' }], classes: [CLASSES.SHAMAN.id] },
    CHOOSE_ONE: { params: [{ key: 'text', value: 'choose one' }], classes: null },
    TWO: {
      params: [
        { key: 'text', value: ['2.id', 'damage'] },
        { key: 'text', value: '2/' },
        { key: 'attack', value: 2 },
      ],
      classes: [CLASSES.DEMON_HUNTER.id],
    },
    TREANT: {
      params: [
        { key: 'text', value: 'treant' },
        { key: 'name', value: 'treant' },
      ],
      classes: [CLASSES.DRUID.id],
    },
    ONE: {
      params: [
        { key: 'text', value: '1-attack' },
        { key: 'text', value: '1-cost' },
        { key: 'attack', value: 1 },
        { key: 'manaCost', value: 1 },
      ],
      classes: [CLASSES.HUNTER.id, CLASSES.PALADIN.id],
    },
    LEECH: { params: [{ key: 'text', value: 'leech' }], classes: [CLASSES.DEATH_KNIGHT.id] },
    GORISHI: {
      params: [
        { key: 'text', value: 'gorishi' },
        { key: 'name', value: 'gorishi' },
      ],
      classes: [CLASSES.DEMON_HUNTER.id],
    },
    LIBRAM: {
      params: [
        { key: 'text', value: 'libram' },
        { key: 'name', value: 'libram' },
      ],
      classes: [CLASSES.PALADIN.id],
    },
    HERO_HEALTH: {
      params: [{ key: 'text', value: ['hero', 'health'] }],
      classes: [CLASSES.DEATH_KNIGHT.id, CLASSES.PRIEST.id, CLASSES.WARLOCK.id],
    },
    ALL_MINIONS: { params: [{ key: 'text', value: ['all', 'minions'] }], classes: null },
  },
}
