---
title: ChildMovingBodyData
---
### Base Classes

[LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| ChildMovingBodyData()                                                          | Create a new instance of this container type.                                                                                 |
| ChildMovingBodyData(ChildMovingBodyData other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| ChildMovingBodyData([LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata/) other)        | Upcast an instance of type [LinearMovingBodyData](/vext/ref/fb/linearmovingbodydata/) to [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata/).        |
| ChildMovingBodyData([MovingBodyData](/vext/ref/fb/movingbodydata/) other)                    | Upcast an instance of type [MovingBodyData](/vext/ref/fb/movingbodydata/) to [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata/).                    |
| ChildMovingBodyData([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata/). |

## Properties

| Name           | Type                                         | Description |
| -------------- | -------------------------------------------- | ----------- |
| inputDelay     | number                                       |             |
| speed          | number                                       |             |
| inputAction    | [EntryInputActionEnum](/vext/ref/fb/entryinputactionenum/) |             |
| triggerImpulse | number                                       |             |
| isOneShotInput | bool                                         |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [ChildMovingBodyData](/vext/ref/fb/childmovingbodydata/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
