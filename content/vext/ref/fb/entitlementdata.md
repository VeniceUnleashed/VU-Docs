---
title: EntitlementData
---
## Description

A structure type representing a Frostbite data type.

## Constructors

| Constructor                            | Description                                              |
| -------------------------------------- | -------------------------------------------------------- |
| EntitlementData()                      | Create a new instance of this structure type.            |
| EntitlementData(EntitlementData other) | Create a reference copy of a structure of the same type. |

## Properties

| Name            | Type                               | Description |
| --------------- | ---------------------------------- | ----------- |
| license         | string                             |             |
| entitlementTag  | string                             |             |
| groupName       | string                             |             |
| productId       | string                             |             |
| projectId       | string                             |             |
| usageType       | [EntitlementType](/vext/ref/fb/entitlementtype/) |             |
| verifyOwnership | bool                               |             |

## Methods

| Type                               | Name            | Parameters |
| ---------------------------------- | --------------- | ---------- |
| [EntitlementData](/vext/ref/fb/entitlementdata/) | [Clone](#clone) |            |

### Clone

> [EntitlementData](/vext/ref/fb/entitlementdata/) **Clone**()

Creates a shallow-copy clone of the structure. Works similarly to [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone).
