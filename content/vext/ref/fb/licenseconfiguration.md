---
title: LicenseConfiguration
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[LicenseConfiguration](#constructor-0)**() |
| **[LicenseConfiguration](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[LicenseConfiguration](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[LicenseConfiguration](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "licenses" >}} | [LicenseInfo](/vext/ref/fb/licenseinfo)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LicenseConfiguration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LicenseConfiguration {#constructor-0}

> **LicenseConfiguration**()

Creates a new [LicenseConfiguration](/vext/ref/fb/licenseconfiguration) frostbite instance.

### LicenseConfiguration {#constructor-1}

> **LicenseConfiguration**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LicenseConfiguration](/vext/ref/fb/licenseconfiguration) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### LicenseConfiguration {#constructor-2}

> **LicenseConfiguration**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [LicenseConfiguration](/vext/ref/fb/licenseconfiguration). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [LicenseConfiguration](/vext/ref/fb/licenseconfiguration). |

### LicenseConfiguration {#constructor-3}

> **LicenseConfiguration**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [LicenseConfiguration](/vext/ref/fb/licenseconfiguration). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [LicenseConfiguration](/vext/ref/fb/licenseconfiguration). |

## Properties

### {{% prop-heading "licenses" %}}

> **[LicenseInfo](/vext/ref/fb/licenseinfo)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LicenseConfiguration](/vext/ref/fb/licenseconfiguration) type.

