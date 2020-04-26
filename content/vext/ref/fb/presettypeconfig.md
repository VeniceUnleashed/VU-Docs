---
title: PresetTypeConfig
---

## Summary

### Constructors

|  |
| --- |
| **[PresetTypeConfig](#constructor-0)**() |
| **[PresetTypeConfig](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "presetId" >}} | int |
| {{< prop "key" >}} | string |
| {{< prop "nameSid" >}} | string |
| {{< prop "descSid" >}} | string |
| {{< prop "lockedSettings" >}} | [LockedSettingConfig](/vext/ref/fb/lockedsettingconfig)[] |
| {{< prop "predefined" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PresetTypeConfig](/vext/ref/fb/presettypeconfig) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PresetTypeConfig" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PresetTypeConfig {#constructor-0}

> **PresetTypeConfig**()

Creates a new [PresetTypeConfig](/vext/ref/fb/presettypeconfig) frostbite instance.

### PresetTypeConfig {#constructor-1}

> **PresetTypeConfig**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PresetTypeConfig](/vext/ref/fb/presettypeconfig) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "presetId" %}}

> **int**

### {{% prop-heading "key" %}}

> **string**

### {{% prop-heading "nameSid" %}}

> **string**

### {{% prop-heading "descSid" %}}

> **string**

### {{% prop-heading "lockedSettings" %}}

> **[LockedSettingConfig](/vext/ref/fb/lockedsettingconfig)**[]

### {{% prop-heading "predefined" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [PresetTypeConfig](/vext/ref/fb/presettypeconfig)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PresetTypeConfig](/vext/ref/fb/presettypeconfig)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PresetTypeConfig](/vext/ref/fb/presettypeconfig) type.

