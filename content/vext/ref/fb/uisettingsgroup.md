---
title: UISettingsGroup
---

## Summary

### Constructors

|  |
| --- |
| **[UISettingsGroup](#constructor-0)**() |
| **[UISettingsGroup](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "nameSid" >}} | string |
| {{< prop "screenColumn" >}} | int |
| {{< prop "settingsItems" >}} | [UISettingsItem](/vext/ref/fb/uisettingsitem)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UISettingsGroup](/vext/ref/fb/uisettingsgroup) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UISettingsGroup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UISettingsGroup {#constructor-0}

> **UISettingsGroup**()

Creates a new [UISettingsGroup](/vext/ref/fb/uisettingsgroup) frostbite instance.

### UISettingsGroup {#constructor-1}

> **UISettingsGroup**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UISettingsGroup](/vext/ref/fb/uisettingsgroup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "nameSid" %}}

> **string**

### {{% prop-heading "screenColumn" %}}

> **int**

### {{% prop-heading "settingsItems" %}}

> **[UISettingsItem](/vext/ref/fb/uisettingsitem)**[]

## Methods

### Clone {#clone}

> **Clone**(): [UISettingsGroup](/vext/ref/fb/uisettingsgroup)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UISettingsGroup](/vext/ref/fb/uisettingsgroup)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UISettingsGroup](/vext/ref/fb/uisettingsgroup) type.

