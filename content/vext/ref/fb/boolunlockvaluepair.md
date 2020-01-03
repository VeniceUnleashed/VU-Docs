---
title: BoolUnlockValuePair
---
### Base Classes

[UnlockValuePair](UnlockValuePair)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| BoolUnlockValuePair()                                                          | Create a new instance of this container type.                                                                                 |
| BoolUnlockValuePair(BoolUnlockValuePair other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| BoolUnlockValuePair([UnlockValuePair](UnlockValuePair) other)                  | Upcast an instance of type [UnlockValuePair](UnlockValuePair) to [BoolUnlockValuePair](BoolUnlockValuePair).                  |
| BoolUnlockValuePair([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [BoolUnlockValuePair](BoolUnlockValuePair). |

## Properties

| Name          | Type | Description |
| ------------- | ---- | ----------- |
| defaultValue  | bool |             |
| unlockedValue | bool |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [BoolUnlockValuePair](BoolUnlockValuePair) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [BoolUnlockValuePair](BoolUnlockValuePair) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
