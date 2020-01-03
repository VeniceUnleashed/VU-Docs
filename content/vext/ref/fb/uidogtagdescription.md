---
title: UIDogTagDescription
---
### Base Classes

[UIItemDescription](/vext/ref/fb/uiitemdescription/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIDogTagDescription()                                                          | Create a new instance of this container type.                                                                                 |
| UIDogTagDescription(UIDogTagDescription other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIDogTagDescription([UIItemDescription](/vext/ref/fb/uiitemdescription/) other)              | Upcast an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription/) to [UIDogTagDescription](/vext/ref/fb/uidogtagdescription/).              |
| UIDogTagDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIDogTagDescription](/vext/ref/fb/uidogtagdescription/). |

## Properties

| Name        | Type | Description |
| ----------- | ---- | ----------- |
| ignoreBuild | bool |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIDogTagDescription](/vext/ref/fb/uidogtagdescription/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIDogTagDescription](/vext/ref/fb/uidogtagdescription/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
