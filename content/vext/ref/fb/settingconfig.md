---
title: SettingConfig
---

## Summary

### Constructors

|  |
| --- |
| **[SettingConfig](#constructor-0)**() |
| **[SettingConfig](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "key" >}} | string |
| {{< prop "nameSid" >}} | string |
| {{< prop "descSid" >}} | string |
| {{< prop "max" >}} | int |
| {{< prop "default" >}} | int |
| {{< prop "min" >}} | int |
| {{< prop "ranked" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SettingConfig](/vext/ref/fb/settingconfig) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SettingConfig" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SettingConfig {#constructor-0}

> **SettingConfig**()

Creates a new [SettingConfig](/vext/ref/fb/settingconfig) frostbite instance.

### SettingConfig {#constructor-1}

> **SettingConfig**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SettingConfig](/vext/ref/fb/settingconfig) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "key" %}}

> **string**

### {{% prop-heading "nameSid" %}}

> **string**

### {{% prop-heading "descSid" %}}

> **string**

### {{% prop-heading "max" %}}

> **int**

### {{% prop-heading "default" %}}

> **int**

### {{% prop-heading "min" %}}

> **int**

### {{% prop-heading "ranked" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [SettingConfig](/vext/ref/fb/settingconfig)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SettingConfig](/vext/ref/fb/settingconfig)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SettingConfig](/vext/ref/fb/settingconfig) type.

