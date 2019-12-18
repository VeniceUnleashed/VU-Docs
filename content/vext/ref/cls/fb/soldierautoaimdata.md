---
title: SoldierAutoAimData (Frostbite Container)
---
### Base Classes

[DataContainer](/vext/ref/cls/shr/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SoldierAutoAimData()                                                          | Create a new instance of this container type.                                                                               |
| SoldierAutoAimData(SoldierAutoAimData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SoldierAutoAimData([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [SoldierAutoAimData](SoldierAutoAimData). |

## Properties

| Name  | Type                           | Description |
| ----- | ------------------------------ | ----------- |
| poses | [AutoAimData](AutoAimData)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierAutoAimData](SoldierAutoAimData) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [SoldierAutoAimData](SoldierAutoAimData) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
