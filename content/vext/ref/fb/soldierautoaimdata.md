---
title: SoldierAutoAimData
---
### Base Classes

[DataContainer](/vext/ref/shared/class/datacontainer)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                   | Description                                                                                                                 |
| ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| SoldierAutoAimData()                                                          | Create a new instance of this container type.                                                                               |
| SoldierAutoAimData(SoldierAutoAimData other)                                  | Create a reference copy of an instance of the same type.                                                                    |
| SoldierAutoAimData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SoldierAutoAimData](SoldierAutoAimData). |

## Properties

| Name  | Type                           | Description |
| ----- | ------------------------------ | ----------- |
| poses | [AutoAimData](AutoAimData)\[\] |             |

## Methods

| Type                                     | Name            | Parameters                                     |
| ---------------------------------------- | --------------- | ---------------------------------------------- |
| [SoldierAutoAimData](SoldierAutoAimData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [SoldierAutoAimData](SoldierAutoAimData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
