---
title: GameAnimationConfig
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| GameAnimationConfig()                                                          | Create a new instance of this container type.                                                                                 |
| GameAnimationConfig(GameAnimationConfig other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| GameAnimationConfig([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [GameAnimationConfig](/vext/ref/fb/gameanimationconfig/).                                      |
| GameAnimationConfig([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [GameAnimationConfig](/vext/ref/fb/gameanimationconfig/). |

## Properties

| Name               | Type | Description |
| ------------------ | ---- | ----------- |
| serverEnable       | bool |             |
| clientEnable       | bool |             |
| useRawGamepadInput | bool |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [GameAnimationConfig](/vext/ref/fb/gameanimationconfig/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [GameAnimationConfig](/vext/ref/fb/gameanimationconfig/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
