---
title: UISettingsItem
---

## Summary

### Constructors

|  |
| --- |
| **[UISettingsItem](#constructor-0)**() |
| **[UISettingsItem](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "nameSid" >}} | string |
| {{< prop "startEndSymbols" >}} | [UISettingSymbols](/vext/ref/fb/uisettingsymbols) |
| {{< prop "setting" >}} | [ProfileOptionData](/vext/ref/fb/profileoptiondata) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UISettingsItem](/vext/ref/fb/uisettingsitem) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UISettingsItem" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UISettingsItem {#constructor-0}

> **UISettingsItem**()

Creates a new [UISettingsItem](/vext/ref/fb/uisettingsitem) frostbite instance.

### UISettingsItem {#constructor-1}

> **UISettingsItem**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UISettingsItem](/vext/ref/fb/uisettingsitem) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "nameSid" %}}

> **string**

### {{% prop-heading "startEndSymbols" %}}

> **[UISettingSymbols](/vext/ref/fb/uisettingsymbols)**

### {{% prop-heading "setting" %}}

> **[ProfileOptionData](/vext/ref/fb/profileoptiondata)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [UISettingsItem](/vext/ref/fb/uisettingsitem)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UISettingsItem](/vext/ref/fb/uisettingsitem)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UISettingsItem](/vext/ref/fb/uisettingsitem) type.

