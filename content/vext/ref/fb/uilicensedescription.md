---
title: UILicenseDescription
---
### Base Classes

[UIItemDescription](/vext/ref/fb/uiitemdescription/)

## Description

A container type representing a Frostbite instance entry.

## Constructors

| Constructor                                                                     | Description                                                                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| UILicenseDescription()                                                          | Create a new instance of this container type.                                                                                   |
| UILicenseDescription(UILicenseDescription other)                                | Create a reference copy of an instance of the same type.                                                                        |
| UILicenseDescription([UIItemDescription](/vext/ref/fb/uiitemdescription/) other)              | Upcast an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription/) to [UILicenseDescription](/vext/ref/fb/uilicensedescription/).              |
| UILicenseDescription([DataContainer](/vext/ref/shared/class/datacontainer) other) | Upcast an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UILicenseDescription](/vext/ref/fb/uilicensedescription/). |

## Properties

| Name      | Type   | Description |
| --------- | ------ | ----------- |
| licenseId | string |             |
| popupText | string |             |

## Methods

| Type                                         | Name            | Parameters                                     |
| -------------------------------------------- | --------------- | ---------------------------------------------- |
| [UILicenseDescription](/vext/ref/fb/uilicensedescription/) | [Clone](#clone) | \[[Guid](/vext/ref/shared/class/guid) **guid**\] |

### Clone

> [UILicenseDescription](/vext/ref/fb/uilicensedescription/) **Clone**(\[[Guid](/vext/ref/shared/class/guid) **guid**\])

Creates a shallow-copy clone of the instance. Look at [DataContainer::Clone](/vext/ref/shared/class/datacontainer#clone) for more details.

#### Parameters

| Name | Type         | Description                                 |
| ---- | ------------ | ------------------------------------------- |
| guid | [Guid](/vext/ref/shared/class/guid/) | An optional GUID to assign to the instance. |
