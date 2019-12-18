---
title: IntUnlockValuePair (Frostbite Container)
---
### Base Classes

[UnlockValuePair](UnlockValuePair)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| IntUnlockValuePair()                                                          | Create a new instance of this container type.                                                                               |
| IntUnlockValuePair(IntUnlockValuePair other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| IntUnlockValuePair([UnlockValuePair](UnlockValuePair) other)                  | Upcast an instance of type [UnlockValuePair](UnlockValuePair) to [IntUnlockValuePair](IntUnlockValuePair).                  |
| IntUnlockValuePair([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [IntUnlockValuePair](IntUnlockValuePair). |

## Properties

| Name          | Type   | Description |
| ------------- | ------ | ----------- |
| defaultValue  | number |             |
| unlockedValue | number |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [IntUnlockValuePair](IntUnlockValuePair) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [IntUnlockValuePair](IntUnlockValuePair) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
