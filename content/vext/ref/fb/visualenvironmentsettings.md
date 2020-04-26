---
title: VisualEnvironmentSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[VisualEnvironmentSettings](#constructor-0)**() |
| **[VisualEnvironmentSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[VisualEnvironmentSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "sunRotationX" >}} | float |
| {{< prop "sunRotationY" >}} | float |
| {{< prop "drawStats" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "VisualEnvironmentSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### VisualEnvironmentSettings {#constructor-0}

> **VisualEnvironmentSettings**()

Creates a new [VisualEnvironmentSettings](/vext/ref/fb/visualenvironmentsettings) frostbite instance.

### VisualEnvironmentSettings {#constructor-1}

> **VisualEnvironmentSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [VisualEnvironmentSettings](/vext/ref/fb/visualenvironmentsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### VisualEnvironmentSettings {#constructor-2}

> **VisualEnvironmentSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [VisualEnvironmentSettings](/vext/ref/fb/visualenvironmentsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [VisualEnvironmentSettings](/vext/ref/fb/visualenvironmentsettings). |

## Properties

### {{% prop-heading "sunRotationX" %}}

> **float**

### {{% prop-heading "sunRotationY" %}}

> **float**

### {{% prop-heading "drawStats" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [VisualEnvironmentSettings](/vext/ref/fb/visualenvironmentsettings) type.

