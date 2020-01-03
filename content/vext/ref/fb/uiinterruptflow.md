---
title: UIInterruptFlow
---
### Base Classes

[Asset](/vext/ref/fb/asset/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                | Description                                                                                                           |
| -------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| UIInterruptFlow()                                                          | Create a new instance of this container type.                                                                         |
| UIInterruptFlow(UIInterruptFlow other)                                     | Create a reference copy of an instance of the same type.                                                              |
| UIInterruptFlow([Asset](/vext/ref/fb/asset/) other)                                      | Upcast an instance of type [Asset](/vext/ref/fb/asset/) to [UIInterruptFlow](/vext/ref/fb/uiinterruptflow/).                                      |
| UIInterruptFlow([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIInterruptFlow](/vext/ref/fb/uiinterruptflow/). |

## Properties

| Name          | Type                               | Description |
| ------------- | ---------------------------------- | ----------- |
| interruptFlow | [InterruptFlow](/vext/ref/fb/interruptflow/)\[\] |             |

## Methods

| Type                               | Name            | Parameters                                     |
| ---------------------------------- | --------------- | ---------------------------------------------- |
| [UIInterruptFlow](/vext/ref/fb/uiinterruptflow/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIInterruptFlow](/vext/ref/fb/uiinterruptflow/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
