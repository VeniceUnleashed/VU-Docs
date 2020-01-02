---
title: ChildMovingBodyData
---
### Base Classes

[LinearMovingBodyData](LinearMovingBodyData)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ChildMovingBodyData()                                                          | Create a new instance of this container type.                                                                                 |
| ChildMovingBodyData(ChildMovingBodyData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ChildMovingBodyData([LinearMovingBodyData](LinearMovingBodyData) other)        | Upcast an instance of type [LinearMovingBodyData](LinearMovingBodyData) to [ChildMovingBodyData](ChildMovingBodyData).        |
| ChildMovingBodyData([MovingBodyData](MovingBodyData) other)                    | Upcast an instance of type [MovingBodyData](MovingBodyData) to [ChildMovingBodyData](ChildMovingBodyData).                    |
| ChildMovingBodyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChildMovingBodyData](ChildMovingBodyData). |

## Properties

| Name           | Type                                         | Description |
| -------------- | -------------------------------------------- | ----------- |
| inputDelay     | number                                       |             |
| speed          | number                                       |             |
| inputAction    | [EntryInputActionEnum](EntryInputActionEnum) |             |
| triggerImpulse | number                                       |             |
| isOneShotInput | bool                                         |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ChildMovingBodyData](ChildMovingBodyData) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChildMovingBodyData](ChildMovingBodyData) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
