---
title: DecalSettings
---

Inherits from [SystemSettings](/vext/ref/fb/systemsettings)

## Summary

### Constructors

|  |
| --- |
| **[DecalSettings](#constructor-0)**() |
| **[DecalSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DecalSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[DecalSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "staticBufferMaxVertexCount" >}} | int |
| {{< prop "ringBufferMaxVertexCount" >}} | int |
| {{< prop "drawEnable" >}} | bool |
| {{< prop "systemEnable2" >}} | bool |
| {{< prop "systemEnable" >}} | bool |
| {{< prop "enable" >}} | bool |
| {{< prop "debugMemUsageEnable" >}} | bool |
| {{< prop "debugWarningsEnable" >}} | bool |
| {{< prop "nvidiaStreamOutputWorkaroundEnable" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DecalSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DecalSettings {#constructor-0}

> **DecalSettings**()

Creates a new [DecalSettings](/vext/ref/fb/decalsettings) frostbite instance.

### DecalSettings {#constructor-1}

> **DecalSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DecalSettings](/vext/ref/fb/decalsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DecalSettings {#constructor-2}

> **DecalSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [DecalSettings](/vext/ref/fb/decalsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [DecalSettings](/vext/ref/fb/decalsettings). |

### DecalSettings {#constructor-3}

> **DecalSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DecalSettings](/vext/ref/fb/decalsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DecalSettings](/vext/ref/fb/decalsettings). |

## Properties

### {{% prop-heading "staticBufferMaxVertexCount" %}}

> **int**

### {{% prop-heading "ringBufferMaxVertexCount" %}}

> **int**

### {{% prop-heading "drawEnable" %}}

> **bool**

### {{% prop-heading "systemEnable2" %}}

> **bool**

### {{% prop-heading "systemEnable" %}}

> **bool**

### {{% prop-heading "enable" %}}

> **bool**

### {{% prop-heading "debugMemUsageEnable" %}}

> **bool**

### {{% prop-heading "debugWarningsEnable" %}}

> **bool**

### {{% prop-heading "nvidiaStreamOutputWorkaroundEnable" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DecalSettings](/vext/ref/fb/decalsettings) type.

