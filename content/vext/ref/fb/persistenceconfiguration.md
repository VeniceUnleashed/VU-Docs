---
title: PersistenceConfiguration
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[PersistenceConfiguration](#constructor-0)**() |
| **[PersistenceConfiguration](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PersistenceConfiguration](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PersistenceConfiguration](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "statCategoryTreeCollection" >}} | [StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection) \| nil |
| {{< prop "mpProfile" >}} | [PlayerTypeProfile](/vext/ref/fb/playertypeprofile) \| nil |
| {{< prop "spProfile" >}} | [PlayerTypeProfile](/vext/ref/fb/playertypeprofile) \| nil |
| {{< prop "coopProfile" >}} | [PlayerTypeProfile](/vext/ref/fb/playertypeprofile) \| nil |
| {{< prop "pointSystemParams" >}} | [PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset) \| nil |
| {{< prop "licenseConfig" >}} | [LicenseConfiguration](/vext/ref/fb/licenseconfiguration) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PersistenceConfiguration" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PersistenceConfiguration {#constructor-0}

> **PersistenceConfiguration**()

Creates a new [PersistenceConfiguration](/vext/ref/fb/persistenceconfiguration) frostbite instance.

### PersistenceConfiguration {#constructor-1}

> **PersistenceConfiguration**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PersistenceConfiguration](/vext/ref/fb/persistenceconfiguration) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PersistenceConfiguration {#constructor-2}

> **PersistenceConfiguration**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PersistenceConfiguration](/vext/ref/fb/persistenceconfiguration). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PersistenceConfiguration](/vext/ref/fb/persistenceconfiguration). |

### PersistenceConfiguration {#constructor-3}

> **PersistenceConfiguration**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PersistenceConfiguration](/vext/ref/fb/persistenceconfiguration). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PersistenceConfiguration](/vext/ref/fb/persistenceconfiguration). |

## Properties

### {{% prop-heading "statCategoryTreeCollection" %}}

> **[StatCategoryTreeCollection](/vext/ref/fb/statcategorytreecollection)** \| **nil**

### {{% prop-heading "mpProfile" %}}

> **[PlayerTypeProfile](/vext/ref/fb/playertypeprofile)** \| **nil**

### {{% prop-heading "spProfile" %}}

> **[PlayerTypeProfile](/vext/ref/fb/playertypeprofile)** \| **nil**

### {{% prop-heading "coopProfile" %}}

> **[PlayerTypeProfile](/vext/ref/fb/playertypeprofile)** \| **nil**

### {{% prop-heading "pointSystemParams" %}}

> **[PointSystemParamsAsset](/vext/ref/fb/pointsystemparamsasset)** \| **nil**

### {{% prop-heading "licenseConfig" %}}

> **[LicenseConfiguration](/vext/ref/fb/licenseconfiguration)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PersistenceConfiguration](/vext/ref/fb/persistenceconfiguration) type.

