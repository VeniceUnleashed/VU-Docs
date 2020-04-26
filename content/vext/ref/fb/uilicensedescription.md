---
title: UILicenseDescription
---

Inherits from 
[UIItemDescription](/vext/ref/fb/uiitemdescription)

## Summary
### Constructors
| |
| ----------- |
| **[UILicenseDescription](#constructor-0)**() |
| **[UILicenseDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UILicenseDescription](#constructor-2)**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription)) |
| **[UILicenseDescription](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "licenseId" >}} | string |
| {{< prop "popupText" >}} | string |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UILicenseDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UILicenseDescription {#constructor-0}
> **UILicenseDescription**()

Creates a new [UILicenseDescription](/vext/ref/fb/uilicensedescription) frostbite instance.

### UILicenseDescription {#constructor-1}
> **UILicenseDescription**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UILicenseDescription](/vext/ref/fb/uilicensedescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UILicenseDescription {#constructor-2}
> **UILicenseDescription**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription))

Casts an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription) to [UILicenseDescription](/vext/ref/fb/uilicensedescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIItemDescription](/vext/ref/fb/uiitemdescription) | The instance to cast to [UILicenseDescription](/vext/ref/fb/uilicensedescription). |

### UILicenseDescription {#constructor-3}
> **UILicenseDescription**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UILicenseDescription](/vext/ref/fb/uilicensedescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UILicenseDescription](/vext/ref/fb/uilicensedescription). |

## Properties
### {{% prop-heading "licenseId" %}}
> **string**

### {{% prop-heading "popupText" %}}
> **string**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UILicenseDescription](/vext/ref/fb/uilicensedescription) type.

