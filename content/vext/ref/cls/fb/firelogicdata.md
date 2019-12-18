---
title: FireLogicData (Frostbite Structure)
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                        | Description                                              |
| ---------------------------------- | -------------------------------------------------------- |
| FireLogicData()                    | Create a new instance of this structure type.            |
| FireLogicData(FireLogicData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name                           | Type                                         | Description |
| ------------------------------ | -------------------------------------------- | ----------- |
| holdAndRelease                 | [HoldAndReleaseData](HoldAndReleaseData)     |             |
| boltAction                     | [BoltActionData](BoltActionData)             |             |
| recoil                         | [RecoilData](RecoilData)                     |             |
| fireInputAction                | [EntryInputActionEnum](EntryInputActionEnum) |             |
| reloadInputAction              | [EntryInputActionEnum](EntryInputActionEnum) |             |
| cycleFireModeInputAction       | [EntryInputActionEnum](EntryInputActionEnum) |             |
| triggerPullWeight              | number                                       |             |
| rateOfFire                     | number                                       |             |
| rateOfFireForBurst             | number                                       |             |
| clientFireRateMultiplier       | number                                       |             |
| reloadDelay                    | number                                       |             |
| fireLogicTypeArray             | [FireLogicType](FireLogicType)\[\]           |             |
| reloadThreshold                | number                                       |             |
| preFireDelay                   | number                                       |             |
| reloadTime                     | number                                       |             |
| reloadTimeBulletsLeft          | number                                       |             |
| fireLogicType                  | [FireLogicType](FireLogicType)               |             |
| reloadLogic                    | [ReloadLogic](ReloadLogic)                   |             |
| automaticDelay                 | number                                       |             |
| reloadType                     | [ReloadType](ReloadType)                     |             |
| holdOffReloadUntilZoomRelease  | bool                                         |             |
| forceReloadActionOnFireTrigger | bool                                         |             |
| holdOffReloadUntilFireRelease  | bool                                         |             |
| alwaysAutoReload               | bool                                         |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [FireLogicData](FireLogicData) | [Clone](#clone) |            |

### Clone

> [FireLogicData](FireLogicData) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone).
