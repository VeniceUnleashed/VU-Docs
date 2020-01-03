---
title: UISoldierCompData
---
### Base Classes

[UIComponentData](/vext/ref/fb/uicomponentdata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                  | Description                                                                                                               |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| UISoldierCompData()                                                          | Create a new instance of this container type.                                                                             |
| UISoldierCompData(UISoldierCompData other)                                   | Create a reference copy of an instance of the same type.                                                                  |
| UISoldierCompData([UIComponentData](/vext/ref/fb/uicomponentdata/) other)                  | Upcast an instance of type [UIComponentData](/vext/ref/fb/uicomponentdata/) to [UISoldierCompData](/vext/ref/fb/uisoldiercompdata/).                  |
| UISoldierCompData([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UISoldierCompData](/vext/ref/fb/uisoldiercompdata/).                                      |
| UISoldierCompData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UISoldierCompData](/vext/ref/fb/uisoldiercompdata/). |

## Properties

| Name                                 | Type   | Description |
| ------------------------------------ | ------ | ----------- |
| criticalHealthThreshold              | number |             |
| hitShaderDamageMultiplier            | number |             |
| hitShaderMinDamage                   | number |             |
| ekgLineThickness                     | number |             |
| shockTraumaAbilityIndex              | number |             |
| rangerPTProgramAbilityIndex          | number |             |
| focusAbilityIndex                    | number |             |
| ekgLineAlpha                         | number |             |
| hitShaderGradientDurationMultiplier  | number |             |
| hitShaderMaxDamage                   | number |             |
| hitShaderIndicatorDurationMultiplier | number |             |
| useVehicleTeamSpawn                  | bool   |             |
| useSquadSpawn                        | bool   |             |
| spawnOnSquadLeaders                  | bool   |             |

## Methods

| Type                                   | Name            | Parameters                                     |
| -------------------------------------- | --------------- | ---------------------------------------------- |
| [UISoldierCompData](/vext/ref/fb/uisoldiercompdata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UISoldierCompData](/vext/ref/fb/uisoldiercompdata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
