---
title: GameAnimationSettings
---
### Base Classes

[SystemSettings](/vext/ref/fb/systemsettings/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| GameAnimationSettings()                                                          | Create a new instance of this container type.                                                                                     |
| GameAnimationSettings(GameAnimationSettings other)                               | Create a reference copy of an instance of the same type.                                                                          |
| GameAnimationSettings([SystemSettings](/vext/ref/fb/systemsettings/) other)                    | Upcast an instance of type [SystemSettings](/vext/ref/fb/systemsettings/) to [GameAnimationSettings](/vext/ref/fb/gameanimationsettings/).                    |
| GameAnimationSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameAnimationSettings](/vext/ref/fb/gameanimationsettings/). |

## Properties

| Name                           | Type       | Description |
| ------------------------------ | ---------- | ----------- |
| temporalLoddingFourthDeltaTime | number     |             |
| antOnClientOnlyGamemodes       | string\[\] |             |
| temporalLoddingFarDistance     | number     |             |
| temporalLoddingSixthDeltaTime  | number     |             |
| temporalLoddingFifthDeltaTime  | number     |             |
| temporalLoddingFirstDeltaTime  | number     |             |
| temporalLoddingSecondDeltaTime | number     |             |
| temporalLoddingThirdDeltaTime  | number     |             |
| temporalLoddingSixthDistance   | number     |             |
| temporalLoddingSecondDistance  | number     |             |
| temporalLoddingFifthDistance   | number     |             |
| temporalLoddingFirstDistance   | number     |             |
| temporalLoddingThirdDistance   | number     |             |
| temporalLoddingFourthDistance  | number     |             |
| serverEnable                   | bool       |             |
| useRawGamepadInput             | bool       |             |
| clientEnable                   | bool       |             |
| useAnimationDrivenCharacter    | bool       |             |

## Methods

| Type                                           | Name            | Parameters                                     |
| ---------------------------------------------- | --------------- | ---------------------------------------------- |
| [GameAnimationSettings](/vext/ref/fb/gameanimationsettings/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameAnimationSettings](/vext/ref/fb/gameanimationsettings/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
