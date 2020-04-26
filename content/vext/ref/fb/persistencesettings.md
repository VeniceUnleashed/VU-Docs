---
title: PersistenceSettings
---

Inherits from [SystemSettings](/vext/ref/fb/systemsettings)

## Summary

### Constructors

|  |
| --- |
| **[PersistenceSettings](#constructor-0)**() |
| **[PersistenceSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PersistenceSettings](#constructor-2)**(other: [SystemSettings](/vext/ref/fb/systemsettings)) |
| **[PersistenceSettings](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

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
| {{< static "PersistenceSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PersistenceSettings {#constructor-0}

> **PersistenceSettings**()

Creates a new [PersistenceSettings](/vext/ref/fb/persistencesettings) frostbite instance.

### PersistenceSettings {#constructor-1}

> **PersistenceSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PersistenceSettings](/vext/ref/fb/persistencesettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PersistenceSettings {#constructor-2}

> **PersistenceSettings**(other: [SystemSettings](/vext/ref/fb/systemsettings))

Casts an instance of type [SystemSettings](/vext/ref/fb/systemsettings) to [PersistenceSettings](/vext/ref/fb/persistencesettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [SystemSettings](/vext/ref/fb/systemsettings) | The instance to cast to [PersistenceSettings](/vext/ref/fb/persistencesettings). |

### PersistenceSettings {#constructor-3}

> **PersistenceSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PersistenceSettings](/vext/ref/fb/persistencesettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PersistenceSettings](/vext/ref/fb/persistencesettings). |

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

The type information for the [PersistenceSettings](/vext/ref/fb/persistencesettings) type.

