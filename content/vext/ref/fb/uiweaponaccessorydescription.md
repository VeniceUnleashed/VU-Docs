---
title: UIWeaponAccessoryDescription
---

Inherits from 
[UIItemDescription](/vext/ref/fb/uiitemdescription)

## Summary
### Constructors
| |
| ----------- |
| **[UIWeaponAccessoryDescription](#constructor-0)**() |
| **[UIWeaponAccessoryDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[UIWeaponAccessoryDescription](#constructor-2)**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription)) |
| **[UIWeaponAccessoryDescription](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "description" >}} | string |
| {{< prop "category" >}} | string |
| {{< prop "texturePath" >}} | string |
| {{< prop "iconTexturePath" >}} | string |
| {{< prop "unlockTexturePath" >}} | string |
| {{< prop "miscTexturePath" >}} | string |
| {{< prop "coreAccessory" >}} | bool |
| {{< prop "hiddenInProgression" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "UIWeaponAccessoryDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### UIWeaponAccessoryDescription {#constructor-0}
> **UIWeaponAccessoryDescription**()

Creates a new [UIWeaponAccessoryDescription](/vext/ref/fb/uiweaponaccessorydescription) frostbite instance.

### UIWeaponAccessoryDescription {#constructor-1}
> **UIWeaponAccessoryDescription**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [UIWeaponAccessoryDescription](/vext/ref/fb/uiweaponaccessorydescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### UIWeaponAccessoryDescription {#constructor-2}
> **UIWeaponAccessoryDescription**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription))

Casts an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription) to [UIWeaponAccessoryDescription](/vext/ref/fb/uiweaponaccessorydescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIItemDescription](/vext/ref/fb/uiitemdescription) | The instance to cast to [UIWeaponAccessoryDescription](/vext/ref/fb/uiweaponaccessorydescription). |

### UIWeaponAccessoryDescription {#constructor-3}
> **UIWeaponAccessoryDescription**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [UIWeaponAccessoryDescription](/vext/ref/fb/uiweaponaccessorydescription). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [UIWeaponAccessoryDescription](/vext/ref/fb/uiweaponaccessorydescription). |

## Properties
### {{% prop-heading "name" %}}
> **string**

### {{% prop-heading "description" %}}
> **string**

### {{% prop-heading "category" %}}
> **string**

### {{% prop-heading "texturePath" %}}
> **string**

### {{% prop-heading "iconTexturePath" %}}
> **string**

### {{% prop-heading "unlockTexturePath" %}}
> **string**

### {{% prop-heading "miscTexturePath" %}}
> **string**

### {{% prop-heading "coreAccessory" %}}
> **bool**

### {{% prop-heading "hiddenInProgression" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [UIWeaponAccessoryDescription](/vext/ref/fb/uiweaponaccessorydescription) type.

