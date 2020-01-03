---
title: UIDogTagDescription
---
### Base Classes

[UIItemDescription](UIItemDescription)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                    | Description                                                                                                                   |
| ------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| UIDogTagDescription()                                                          | Create a new instance of this container type.                                                                                 |
| UIDogTagDescription(UIDogTagDescription other)                                 | Create a reference copy of an instance of the same type.                                                                      |
| UIDogTagDescription([UIItemDescription](UIItemDescription) other)              | Upcast an instance of type [UIItemDescription](UIItemDescription) to [UIDogTagDescription](UIDogTagDescription).              |
| UIDogTagDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIDogTagDescription](UIDogTagDescription). |

## Properties

| Name        | Type | Description |
| ----------- | ---- | ----------- |
| ignoreBuild | bool |             |

## Methods

| Type                                       | Name            | Parameters                                     |
| ------------------------------------------ | --------------- | ---------------------------------------------- |
| [UIDogTagDescription](UIDogTagDescription) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UIDogTagDescription](UIDogTagDescription) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
