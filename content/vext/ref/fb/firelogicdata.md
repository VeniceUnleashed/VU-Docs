---
title: FireLogicData
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
| holdAndRelease                 | [HoldAndReleaseData](/vext/ref/fb/holdandreleasedata/)     |             |
| boltAction                     | [BoltActionData](/vext/ref/fb/boltactiondata/)             |             |
| recoil                         | [RecoilData](/vext/ref/fb/recoildata/)                     |             |
| fireInputAction                | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |
| reloadInputAction              | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |
| cycleFireModeInputAction       | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |
| triggerPullWeight              | number                                       |             |
| rateOfFire                     | number                                       |             |
| rateOfFireForBurst             | number                                       |             |
| clientFireRateMultiplier       | number                                       |             |
| reloadDelay                    | number                                       |             |
| fireLogicTypeArray             | [FireLogicType](/vext/ref/fb/firelogictype/)\[\]           |             |
| reloadThreshold                | number                                       |             |
| preFireDelay                   | number                                       |             |
| reloadTime                     | number                                       |             |
| reloadTimeBulletsLeft          | number                                       |             |
| fireLogicType                  | [FireLogicType](/vext/ref/fb/firelogictype/)               |             |
| reloadLogic                    | [ReloadLogic](/vext/ref/fb/reloadlogic/)                   |             |
| automaticDelay                 | number                                       |             |
| reloadType                     | [ReloadType](/vext/ref/fb/reloadtype/)                     |             |
| holdOffReloadUntilZoomRelease  | bool                                         |             |
| forceReloadActionOnFireTrigger | bool                                         |             |
| holdOffReloadUntilFireRelease  | bool                                         |             |
| alwaysAutoReload               | bool                                         |             |

## Methods

| Type                           | Name            | Parameters |
| ------------------------------ | --------------- | ---------- |
| [FireLogicData](/vext/ref/fb/firelogicdata/) | [Clone](#clone) |            |

### Clone

> [FireLogicData](/vext/ref/fb/firelogicdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
