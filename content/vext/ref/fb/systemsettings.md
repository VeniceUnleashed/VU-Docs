---
title: SystemSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SystemSettings](#constructor-0)**() |
| **[SystemSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SystemSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SystemSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SystemSettings {#constructor-0}

> **SystemSettings**()

Creates a new [SystemSettings](/vext/ref/fb/systemsettings) frostbite instance.

### SystemSettings {#constructor-1}

> **SystemSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SystemSettings](/vext/ref/fb/systemsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SystemSettings {#constructor-2}

> **SystemSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SystemSettings](/vext/ref/fb/systemsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SystemSettings](/vext/ref/fb/systemsettings). |

## Properties

### {{% prop-heading "name" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SystemSettings](/vext/ref/fb/systemsettings) type.

