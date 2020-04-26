---
title: UIWeaponDescription
---

Inherits from [UIItemDescription](/vext/ref/fb/uiitemdescription)

## Summary

### Constructors

|  |
| --- |
| **[UIWeaponDescription](#constructor-0)**() |
| **[UIWeaponDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UIWeaponDescription](#constructor-2)**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription)) |
| **[UIWeaponDescription](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "unlockName" >}} | string |
| {{< prop "description" >}} | string |
| {{< prop "category" >}} | string |
| {{< prop "texturePath" >}} | string |
| {{< prop "iconTexturePath" >}} | string |
| {{< prop "unlockTexturePath" >}} | string |
| {{< prop "ammo" >}} | string |
| {{< prop "rateOfFire" >}} | string |
| {{< prop "range" >}} | string |
| {{< prop "fireModeSingle" >}} | bool |
| {{< prop "fireModeBurst" >}} | bool |
| {{< prop "fireModeAuto" >}} | bool |
| {{< prop "hiddenInProgression" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIWeaponDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIWeaponDescription {#constructor-0}

> **UIWeaponDescription**()

Creates a new [UIWeaponDescription](/vext/ref/fb/uiweapondescription) frostbite instance.

### UIWeaponDescription {#constructor-1}

> **UIWeaponDescription**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIWeaponDescription](/vext/ref/fb/uiweapondescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UIWeaponDescription {#constructor-2}

> **UIWeaponDescription**(other: [UIItemDescription](/vext/ref/fb/uiitemdescription))

Casts an instance of type [UIItemDescription](/vext/ref/fb/uiitemdescription) to [UIWeaponDescription](/vext/ref/fb/uiweapondescription). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [UIItemDescription](/vext/ref/fb/uiitemdescription) | The instance to cast to [UIWeaponDescription](/vext/ref/fb/uiweapondescription). |

### UIWeaponDescription {#constructor-3}

> **UIWeaponDescription**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UIWeaponDescription](/vext/ref/fb/uiweapondescription). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UIWeaponDescription](/vext/ref/fb/uiweapondescription). |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "unlockName" %}}

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

### {{% prop-heading "ammo" %}}

> **string**

### {{% prop-heading "rateOfFire" %}}

> **string**

### {{% prop-heading "range" %}}

> **string**

### {{% prop-heading "fireModeSingle" %}}

> **bool**

### {{% prop-heading "fireModeBurst" %}}

> **bool**

### {{% prop-heading "fireModeAuto" %}}

> **bool**

### {{% prop-heading "hiddenInProgression" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIWeaponDescription](/vext/ref/fb/uiweapondescription) type.

