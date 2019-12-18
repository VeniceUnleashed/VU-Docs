---
title: GameAnimationConfig (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| GameAnimationConfig()                                                          | Create a new instance of this container type.                                                                                 |
| GameAnimationConfig(GameAnimationConfig other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| GameAnimationConfig([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [GameAnimationConfig](GameAnimationConfig).                                      |
| GameAnimationConfig([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [GameAnimationConfig](GameAnimationConfig). |

## Properties

| Name               | Type | Description |
| ------------------ | ---- | ----------- |
| serverEnable       | bool |             |
| clientEnable       | bool |             |
| useRawGamepadInput | bool |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [GameAnimationConfig](GameAnimationConfig) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [GameAnimationConfig](GameAnimationConfig) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
