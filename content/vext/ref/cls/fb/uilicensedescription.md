---
title: UILicenseDescription (Frostbite Container)
---
### Base Classes

[UIItemDescription](UIItemDescription)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UILicenseDescription()                                                          | Create a new instance of this container type.                                                                                   |
| UILicenseDescription(UILicenseDescription other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UILicenseDescription([UIItemDescription](UIItemDescription) other)              | Upcast an instance of type [UIItemDescription](UIItemDescription) to [UILicenseDescription](UILicenseDescription).              |
| UILicenseDescription([DataContainer](/vext/ref/cls/shr/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/cls/shr/datacontainer) to [UILicenseDescription](UILicenseDescription). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| licenseId | string |             |
| popupText | string |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UILicenseDescription](UILicenseDescription) | [Clone](#clone) | \[[Guid](/vext/ref/cls/shr/guid) **guid**\] |

### Clone

> [UILicenseDescription](UILicenseDescription) **Clone**(\[[Guid](/vext/ref/cls/shr/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/cls/shr/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](Guid) | An optional GUID to assign to the instance. |
