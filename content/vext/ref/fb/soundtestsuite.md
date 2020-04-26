---
title: SoundTestSuite
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SoundTestSuite](#constructor-0)**() |
| **[SoundTestSuite](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SoundTestSuite](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "assets" >}} | [SoundAsset](/vext/ref/fb/soundasset)[] |
| {{< prop "tests" >}} | [SoundTestSpec](/vext/ref/fb/soundtestspec)[] |
| {{< prop "profileTests" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoundTestSuite" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoundTestSuite {#constructor-0}

> **SoundTestSuite**()

Creates a new [SoundTestSuite](/vext/ref/fb/soundtestsuite) frostbite instance.

### SoundTestSuite {#constructor-1}

> **SoundTestSuite**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoundTestSuite](/vext/ref/fb/soundtestsuite) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SoundTestSuite {#constructor-2}

> **SoundTestSuite**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SoundTestSuite](/vext/ref/fb/soundtestsuite). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SoundTestSuite](/vext/ref/fb/soundtestsuite). |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "assets" %}}

> **[SoundAsset](/vext/ref/fb/soundasset)**[]

### {{% prop-heading "tests" %}}

> **[SoundTestSpec](/vext/ref/fb/soundtestspec)**[]

### {{% prop-heading "profileTests" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoundTestSuite](/vext/ref/fb/soundtestsuite) type.

