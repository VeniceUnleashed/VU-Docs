---
title: SubWorldReferenceObjectData
---

Inherits from 
[ReferenceObjectData](/vext/ref/fb/referenceobjectdata)

## Summary
### Constructors
| |
| ----------- |
| **[SubWorldReferenceObjectData](#constructor-0)**() |
| **[SubWorldReferenceObjectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[SubWorldReferenceObjectData](#constructor-2)**(other: [ReferenceObjectData](/vext/ref/fb/referenceobjectdata)) |
| **[SubWorldReferenceObjectData](#constructor-3)**(other: [GameObjectData](/vext/ref/fb/gameobjectdata)) |
| **[SubWorldReferenceObjectData](#constructor-4)**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer)) |
| **[SubWorldReferenceObjectData](#constructor-5)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "bundleName" >}} | string |
| {{< prop "inclusionSettings" >}} | [SubWorldInclusionSettings](/vext/ref/fb/subworldinclusionsettings) \| nil |
| {{< prop "autoLoad" >}} | bool |
| {{< prop "isWin32SubLevel" >}} | bool |
| {{< prop "isXenonSubLevel" >}} | bool |
| {{< prop "isPs3SubLevel" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SubWorldReferenceObjectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SubWorldReferenceObjectData {#constructor-0}
> **SubWorldReferenceObjectData**()

Creates a new [SubWorldReferenceObjectData](/vext/ref/fb/subworldreferenceobjectdata) frostbite instance.

### SubWorldReferenceObjectData {#constructor-1}
> **SubWorldReferenceObjectData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [SubWorldReferenceObjectData](/vext/ref/fb/subworldreferenceobjectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### SubWorldReferenceObjectData {#constructor-2}
> **SubWorldReferenceObjectData**(other: [ReferenceObjectData](/vext/ref/fb/referenceobjectdata))

Casts an instance of type [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) to [SubWorldReferenceObjectData](/vext/ref/fb/subworldreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ReferenceObjectData](/vext/ref/fb/referenceobjectdata) | The instance to cast to [SubWorldReferenceObjectData](/vext/ref/fb/subworldreferenceobjectdata). |

### SubWorldReferenceObjectData {#constructor-3}
> **SubWorldReferenceObjectData**(other: [GameObjectData](/vext/ref/fb/gameobjectdata))

Casts an instance of type [GameObjectData](/vext/ref/fb/gameobjectdata) to [SubWorldReferenceObjectData](/vext/ref/fb/subworldreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameObjectData](/vext/ref/fb/gameobjectdata) | The instance to cast to [SubWorldReferenceObjectData](/vext/ref/fb/subworldreferenceobjectdata). |

### SubWorldReferenceObjectData {#constructor-4}
> **SubWorldReferenceObjectData**(other: [GameDataContainer](/vext/ref/fb/gamedatacontainer))

Casts an instance of type [GameDataContainer](/vext/ref/fb/gamedatacontainer) to [SubWorldReferenceObjectData](/vext/ref/fb/subworldreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [GameDataContainer](/vext/ref/fb/gamedatacontainer) | The instance to cast to [SubWorldReferenceObjectData](/vext/ref/fb/subworldreferenceobjectdata). |

### SubWorldReferenceObjectData {#constructor-5}
> **SubWorldReferenceObjectData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [SubWorldReferenceObjectData](/vext/ref/fb/subworldreferenceobjectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [SubWorldReferenceObjectData](/vext/ref/fb/subworldreferenceobjectdata). |

## Properties
### {{% prop-heading "bundleName" %}}
> **string**

### {{% prop-heading "inclusionSettings" %}}
> **[SubWorldInclusionSettings](/vext/ref/fb/subworldinclusionsettings)** | **nil**

### {{% prop-heading "autoLoad" %}}
> **bool**

### {{% prop-heading "isWin32SubLevel" %}}
> **bool**

### {{% prop-heading "isXenonSubLevel" %}}
> **bool**

### {{% prop-heading "isPs3SubLevel" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SubWorldReferenceObjectData](/vext/ref/fb/subworldreferenceobjectdata) type.

