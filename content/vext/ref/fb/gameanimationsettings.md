---
title: GameAnimationSettings
---
### Base Classes

[SystemSettings](SystemSettings)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                      | Description                                                                                                                       |
| -------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| GameAnimationSettings()                                                          | Create a new instance of this container type.                                                                                     |
| GameAnimationSettings(GameAnimationSettings other)                               | Create a reference copy of an instance of the same type.                                                                          |
| GameAnimationSettings([SystemSettings](SystemSettings) other)                    | Upcast an instance of type [SystemSettings](SystemSettings) to [GameAnimationSettings](GameAnimationSettings).                    |
| GameAnimationSettings([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameAnimationSettings](GameAnimationSettings). |

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
| [GameAnimationSettings](GameAnimationSettings) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameAnimationSettings](GameAnimationSettings) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
