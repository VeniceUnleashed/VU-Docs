---
title: BoolUnlockValuePair
---
### Base Classes

[UnlockValuePair](/vext/ref/fb/unlockvaluepair/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| BoolUnlockValuePair()                                                          | Create a new instance of this container type.                                                                                 |
| BoolUnlockValuePair(BoolUnlockValuePair other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| BoolUnlockValuePair([UnlockValuePair](/vext/ref/fb/unlockvaluepair/) other)                  | Upcast an instance of type [UnlockValuePair](/vext/ref/fb/unlockvaluepair/) to [BoolUnlockValuePair](/vext/ref/fb/boolunlockvaluepair/).                  |
| BoolUnlockValuePair([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BoolUnlockValuePair](/vext/ref/fb/boolunlockvaluepair/). |

## Properties

| Name          | Type | Description |
| ------------- | ---- | ----------- |
| defaultValue  | bool |             |
| unlockedValue | bool |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [BoolUnlockValuePair](/vext/ref/fb/boolunlockvaluepair/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BoolUnlockValuePair](/vext/ref/fb/boolunlockvaluepair/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
