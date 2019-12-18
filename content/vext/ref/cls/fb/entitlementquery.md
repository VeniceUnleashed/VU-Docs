---
title: EntitlementQuery (Frostbite Container)
---
### Base Classes

[Asset](Asset)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                 | Description                                                                                                             |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| EntitlementQuery()                                                          | Create a new instance of this container type.                                                                           |
| EntitlementQuery(EntitlementQuery other)                                    | Create a reference copy of an instance of the same type.                                                                |
| EntitlementQuery([Asset](Asset) other)                                      | Upcast an instance of type [Asset](Asset) to [EntitlementQuery](EntitlementQuery).                                      |
| EntitlementQuery([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [EntitlementQuery](EntitlementQuery). |

## Properties

| Name             | Type                                   | Description |
| ---------------- | -------------------------------------- | ----------- |
| entitlementsData | [EntitlementData](EntitlementData)\[\] |             |
| groupNames       | string\[\]                             |             |
| platform         | [GamePlatform](GamePlatform)           |             |
| entitlementTag   | string                                 |             |
| productId        | string                                 |             |
| projectId        | string                                 |             |

## Methods

| Type                                 | Name            | Parameters                                     |
| ------------------------------------ | --------------- | ---------------------------------------------- |
| [EntitlementQuery](EntitlementQuery) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [EntitlementQuery](EntitlementQuery) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
