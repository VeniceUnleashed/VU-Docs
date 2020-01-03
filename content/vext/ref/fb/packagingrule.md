---
title: PackagingRule
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                              | Description                                                                                                       |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| PackagingRule()                                                          | Create a new instance of this container type.                                                                     |
| PackagingRule(PackagingRule other)                                       | Create a reference copy of an instance of the same type.                                                          |
| PackagingRule([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [PackagingRule](PackagingRule).                                      |
| PackagingRule([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PackagingRule](PackagingRule). |

## Properties

| Name          | Type                              | Description |
| ------------- | --------------------------------- | ----------- |
| debugColor    | [Vec3](/vext/ref/shared/class/Vec3) |             |
| canTargetSelf | bool                              |             |

## Methods

| Type                           | Name            | Parameters                                     |
| ------------------------------ | --------------- | ---------------------------------------------- |
| [PackagingRule](PackagingRule) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [PackagingRule](PackagingRule) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
