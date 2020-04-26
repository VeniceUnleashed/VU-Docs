---
title: SubWorldInclusionSettings
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SubWorldInclusionSettings](#constructor-0)**() |
| **[SubWorldInclusionSettings](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SubWorldInclusionSettings](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "settings" >}} | [SubWorldInclusionSetting](/vext/ref/fb/subworldinclusionsetting)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SubWorldInclusionSettings" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SubWorldInclusionSettings {#constructor-0}

> **SubWorldInclusionSettings**()

Creates a new [SubWorldInclusionSettings](/vext/ref/fb/subworldinclusionsettings) frostbite instance.

### SubWorldInclusionSettings {#constructor-1}

> **SubWorldInclusionSettings**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SubWorldInclusionSettings](/vext/ref/fb/subworldinclusionsettings) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SubWorldInclusionSettings {#constructor-2}

> **SubWorldInclusionSettings**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SubWorldInclusionSettings](/vext/ref/fb/subworldinclusionsettings). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SubWorldInclusionSettings](/vext/ref/fb/subworldinclusionsettings). |

## Properties

### {{% prop-heading "settings" %}}

> **[SubWorldInclusionSetting](/vext/ref/fb/subworldinclusionsetting)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SubWorldInclusionSettings](/vext/ref/fb/subworldinclusionsettings) type.

